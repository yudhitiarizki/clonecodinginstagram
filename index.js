import express from "express";
import db from "./config/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors" //cookie can be access in client side
// import Users from "./models/UserModel.js";
import router from "./routes/index.js";

const app = express()

try {
    await db.authenticate()
    console.log('Database connected')

    // await Users.sync()
    //checking users table, if not will auto create
} catch (error) {
    console.log(error)
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' })) //change origin as our domain for react
app.use(cookieParser())
app.use(express.json()) // menerima dalam bentuk json
app.use(router) //middleware


app.listen(5000, () => console.log('Server running uhuyy at port 5000'))