const {
    Posts,
    Comments,
    Likes,
    sequelize,
    Sequelize,
    Users,
  } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['user_id', 'name', 'username', 'email', 'avatar']
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

    
    let avatar = req.protocol + '://' + req.get('host') + "/public/uploads/default.png"

    if (req.file) {
        avatar = req.protocol + '://' + req.get('host') + "/public/uploads/" + req.file.filename;
    }

    //hash
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create({
            name: name,
            email: email,
            username: username,
            password: hashPassword,
            avatar: avatar
        })
        res.json({ msg: "Register successfully" })
    } catch (error) {
        console.log(error)
    }
}

const Login = async (req, res) => {
    try {
        const users = await Users.findOne({
            where: {
                username: req.body.username
            }
        })

        const user = users.dataValues;
        
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });

        const user_id = user.user_id;
        const username = user.username;
        const name = user.name;
        const email = user.email;
        const avatar = user.avatar;


        const accessToken = jwt.sign({ user_id, username, name, email, avatar }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        const refreshToken = jwt.sign({ user_id, username, name, email, avatar }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });


        await Users.update({ refresh_token: refreshToken }, {
            where: {
                user_id: user_id
            }
        });


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

const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) return res.sendStatus(204) //no content
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    // console.log(user[0])
    if (!user[0]) return res.sendStatus(204)
    const userId = user[0].id
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    })
    res.clearCookie('refreshToken') //clear cookie
    return res.sendStatus(200)
}

module.exports = { getUsers, Login, Register, Logout }