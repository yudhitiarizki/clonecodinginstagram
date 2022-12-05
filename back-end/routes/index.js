const express = require("express");
const dotenv = require("dotenv");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { refreshToken } = require("../controllers/RefreshToken.js");

dotenv.config()

// function
const { getUsers, Register, Login } = require("../controllers/Users.js");
const { allPosts, addPost, deletePost, putPost } = require("../controllers/Posts");
const { searchComments, addComments, deleteComments, putComments, allComments } = require("../controllers/Comments");
const { likePost } = require("../controllers/Likes");

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);

router.get('/posts', allPosts);
router.post('/posts', addPost);
router.delete('/posts/:post_id', deletePost);
router.put('/posts/:post_id', putPost);

router.get('/comments/', allComments);
router.get('/comments/:post_id', searchComments);
router.post('/comments/:post_id', addComments);
router.delete('/comments/:comment_id', deleteComments);
router.put('/comments/:comment_id', putComments);

router.put('/like/:post_id', likePost);

module.exports = router;