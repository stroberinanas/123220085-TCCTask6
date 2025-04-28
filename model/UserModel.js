import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Notes = db.define("notes", {
    title: Sequelize.STRING,
    category: Sequelize.STRING,
    note: Sequelize.STRING,
});

db.sync().then(() => console.log("database synced"));
export default Notes;