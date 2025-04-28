import Notes from "../model/UserModel.js";

//Get Notes
async function getNotes(req, res) {
    try {
        const result = await Notes.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error.message)
    }
}

// Get Single Note by ID
async function getNoteById(req, res) {
    try {
        const note = await Notes.findByPk(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//Create Notes
async function createNotes(req, res) {
    try {
        const inputData = req.body
        Notes.create(inputData)
        res.status(201).json({
            success: true,
            message: "Notes Created",
        })
    } catch (error) {
        console.log(error.message)
    }
}

//Edit Notes
async function updateNotes(req, res) {
    try {
        const editData = req.body
        const id = req.params.id

        await Notes.update(editData, {
            where: { id },
        })
        res.status(200).json({
            message: "Notes Updated",
        })

    } catch (error) {
        console.log(error.message)
    }

}

//Delete Notes
async function deleteNotes(req, res) {
    try {
        const id = req.params.id
        await Notes.destroy({
            where: { id },
        })
        res.status(200).json({
            message: "Notes Deleted",
        })
    } catch (error) {
        console.log(error.message)
    }

}

export { getNotes, getNoteById, createNotes, updateNotes, deleteNotes }