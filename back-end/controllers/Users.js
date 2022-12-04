const Users = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'username', 'email']
        })
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

const Register = async (req, res) => {
    const { name, email, username, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password doesnt match!" })
    const salt = await bcrypt.genSalt() //bcrypt
    //hash
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create({
            name: name,
            email: email,
            username: username,
            password: hashPassword
        })
        res.json({ msg: "Register successfully" })
    } catch (error) {
        console.log(error)
    }
}

const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                username: req.body.username
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (!match) return res.status(400).json({ msg: "Wrong Password" });

        const userId = user[0].id
        const username = user[0].username
        const name = user[0].name
        const email = user[0].email

        const accessToken = jwt.sign({ userId, username, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '120s'
        })

        const refreshToken = jwt.sign({ userId, username, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        })

        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true, //it will not show in client
            maxAge: 24 * 60 * 60 * 1000, //cookie expired in 1d
            // secure: true //If we use HTTPS
        })

        res.json({ accessToken })
    } catch (error) {
        res.status(404).json({ msg: "Username not found" })
    }
}

module.exports = { getUsers, Login, Register }