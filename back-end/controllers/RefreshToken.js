const Users = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken

        if (!refreshToken) return res.sendStatus(401)
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        })
        // console.log(user[0])
        if (!user[0]) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const username = user[0].username;
            const accessToken = jwt.sign({ userId, name, email, username }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = { refreshToken };