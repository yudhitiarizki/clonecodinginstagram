const express = require("express");
const dotenv = require("dotenv");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { refreshToken } = require("../controllers/RefreshToken.js");
const VerifyLogin = require('../middleware/VerifyLogin')

const multer = require('multer');
const path = require('path');

dotenv.config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, path.parse(file.originalname).name + "-" + Date.now() + "-" + path.extname(file.originalname));
    }
});

// function
const { getUsers, Register, Login, Logout } = require("../controllers/Users.js");
const { allPosts, addPost, deletePost, putPost } = require("../controllers/Posts");
const { searchComments, addComments, deleteComments, putComments, allComments } = require("../controllers/Comments");
const { likePost } = require("../controllers/Likes");

const router = express.Router();

router.get('/users', verifyToken, getUsers)
router.post('/users', multer({ storage }).single('avatar'), Register);
router.post('/login', Login);
router.post('/logout', Logout);
router.get('/token', refreshToken);

router.get('/posts', VerifyLogin, allPosts);
router.post('/posts', VerifyLogin, multer({ storage }).single('image'), addPost);
router.delete('/posts/:post_id',VerifyLogin,  deletePost);
router.put('/posts/:post_id', VerifyLogin, multer({ storage }).single('image'), putPost);

router.get('/comments/', VerifyLogin, allComments);
router.get('/comments/:post_id', VerifyLogin, searchComments);
router.post('/comments/:post_id', VerifyLogin, addComments);
router.delete('/comments/:comment_id', VerifyLogin, deleteComments);
router.put('/comments/:comment_id', VerifyLogin, putComments);

router.put('/like/:post_id', VerifyLogin, likePost);

module.exports = router;