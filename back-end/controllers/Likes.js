const { Likes, Posts, sequelize, Sequelize } = require('../models');
const Joi = require('joi');
const jwt = require("jsonwebtoken"); 


const likePost = async (req, res) => {
    try {
        const { post_id } = req.params;

        const { user_id } = res.locals.user;
  
        const isExist = await Posts.findByPk(post_id);
  
        if (!isExist) {
          return res.status(404).json({
            errorMessage: 'The post does not exist.',
          });
        }
  
        let isLike = await Likes.findOne({
          where: { post_id, user_id },
        });
  
        if (!isLike) {
          await Likes.create({ post_id, user_id });
  
          return res
            .status(200)
            .json({ message: 'Like the post success' });
        } else {
          await Likes.destroy({
            where: { post_id, user_id },
          });
  
          return res
            .status(200)
            .json({ message: 'Unlike the post' });
        }
      } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to like the post.',
        });
      }
}


module.exports = { likePost };
