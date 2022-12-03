import express from "express";
import db from "./config/Database.js";
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

app.use(express.json()) // menerima dalam bentuk json
app.use(router) //middleware


app.listen(5000, () => console.log('Server running uhuyy at port 5000'))