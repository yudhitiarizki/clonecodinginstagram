import express from "express";
import dotenv from "dotenv"
import { getUsers, Register, Login } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"

dotenv.config()
const router = express.Router()

router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)

export default router