import { Sequelize } from "sequelize";

const db = new Sequelize("tccnotes", "root", "cantik", {
    host: "34.16.78.62",
    dialect: "mysql",
});

export default db;

