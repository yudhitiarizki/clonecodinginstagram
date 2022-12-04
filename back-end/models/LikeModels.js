import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// Schema table Likes
const Likes = db.define('likes', {
    user_id: {
        type: DataTypes.INTEGER
    },
    post_id: {
        type: DataTypes.INTEGER
    },
    like: {
        type: DataTypes.INTEGER
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Likes;