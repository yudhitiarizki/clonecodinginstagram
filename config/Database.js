import { Sequelize } from "sequelize";

const db = new Sequelize('clone_instagram_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;