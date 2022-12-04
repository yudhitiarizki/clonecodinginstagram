const express = require("express");
const dotenv = require("dotenv");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { refreshToken } = require("../controllers/RefreshToken.js");

dotenv.config()

// function
const { getUsers, Register, Login } = require("../controllers/Users.js");
const { allPosts, addPost, deletePost } = require("../controllers/Posts");

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);

router.get('/posts', allPosts);


module.exports = router;