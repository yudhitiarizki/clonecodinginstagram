const express = require("express");
const dotenv = require("dotenv");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { refreshToken } = require("../controllers/RefreshToken.js");

const multer = require('multer');
const path = require('path')

dotenv.config()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, path.parse(file.originalname).name + "-" + Date.now() + "-" + path.extname(file.originalname));
    }
})

// function
const { getUsers, Register, Login, Logout } = require("../controllers/Users.js");
const { allPosts, addPost, deletePost, putPost } = require("../controllers/Posts");
const { searchComments, addComments, deleteComments, putComments, allComments } = require("../controllers/Comments");
const { likePost } = require("../controllers/Likes");

const router = express.Router();

router.get('/users', verifyToken, getUsers)
router.post('/users', multer({ storage }).single('avatar'), Register);
router.post('/login', Login);
router.post('/login', Logout);
router.get('/token', refreshToken);

router.get('/posts', verifyToken, allPosts);
router.post('/posts', verifyToken, multer({ storage }).single('image'), addPost);
router.delete('/posts/:post_id',verifyToken,  deletePost);
router.put('/posts/:post_id', verifyToken, multer({ storage }).single('image'), putPost);

router.get('/comments/', verifyToken, allComments);
router.get('/comments/:post_id', verifyToken, searchComments);
router.post('/comments/:post_id', verifyToken, addComments);
router.delete('/comments/:comment_id', verifyToken, deleteComments);
router.put('/comments/:comment_id', verifyToken, putComments);

router.put('/like/:post_id', likePost);

module.exports = router;