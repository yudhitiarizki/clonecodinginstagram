import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

// Schema table Comments
const Comments = db.define('comments', {
    user_id: {
        type: DataTypes.INTEGER
    },
    post_id: {
        type: DataTypes.INTEGER
    },
    comment: {
        type: DataTypes.STRING
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

export default Comments;