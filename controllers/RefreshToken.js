import Users from "../models/UserModel.js"
import jwt from "jsonwebtoken"

export const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) return res.sendStatus(401)
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        })
        if (!user[0]) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESS_TOKEN_SECRET, (err, decode) => {
            if (err) return res.sendStatus(403)
            const userId = user[0].id
            const name = user[0].name
            const username = user[0].username
            const email = user[0].email
            const accessToken = jwt.sign({ userId, username, name, email }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '120s'
            })
            res.json({ accessToken })
        })
    } catch (error) {
        console.log(error)
    }
}