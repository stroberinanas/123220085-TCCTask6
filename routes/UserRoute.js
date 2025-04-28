import express from "express"
import { createNotes, deleteNotes, getNoteById, getNotes, updateNotes } from "../controller/UserController.js"

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.post("/add-notes", createNotes);
router.put("/edit-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);

export default router;