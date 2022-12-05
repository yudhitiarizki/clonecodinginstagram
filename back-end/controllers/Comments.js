const { Comments, sequelize, Sequelize } = require('../models');
const Joi = require('joi');
const jwt = require("jsonwebtoken"); 

const RE_COMMENT = /^[\s\S]{1,100}$/;

const commentSchema = Joi.object({
  comment: Joi.string().pattern(RE_COMMENT).required(),
});

const allComments = async (req, res) => {
    try {
      const commentsQuery = `
        SELECT c.comment_id, c.user_id, u.username, u.avatar, c.comment, c.createdAt, c.updatedAt
        FROM Comments AS c
        JOIN Users AS u
        ON c.user_id = u.user_id`;
  
      const comments = await sequelize.query(commentsQuery, {
        type: Sequelize.QueryTypes.SELECT,
      });

      return res.status(200).json({ data: comments });
    } catch (error) {
      console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to retrieve comment.',
        });
    }
}

const searchComments = async (req, res) => {
    try {
        const { post_id } = req.params;
  
        const commentsQuery = `
                  SELECT c.comment_id, c.user_id, u.name, c.comment, c.createdAt, c.updatedAt
                  FROM Comments AS c
                  JOIN Users AS u
                  ON c.user_id = u.user_id 
                  WHERE c.post_id = ${post_id}`;
  
        const comments = await sequelize.query(commentsQuery, {
          type: Sequelize.QueryTypes.SELECT,
        });
  
        comments.sort((a, b) => b.createdAt - a.createdAt);
  
        return res.status(200).json({ data: comments });
    } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to retrieve comment.',
        });
    }
}

const addComments = async (req, res) => {
    try {
        const resultSchema = commentSchema.validate(req.body);
        if (resultSchema.error) {
          return res.status(412).json({
            errorMessage: 'The data format is incorrect.',
          });
        }
  
        const { post_id } = req.params;
        const { comment } = resultSchema.value;
        const cookie = req.cookies;
        const Userlogin = jwt.decode(cookie.refreshToken);
        const user_id = Userlogin.user_id;
  
        await Comments.create({ post_id, user_id, comment });
        return res.status(201).json({ message: 'You wrote a comment.' });
      } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to write a comment.',
        });
      }
}

const putComments = async (req, res) => {
    try {
        const resultSchema = commentSchema.validate(req.body);
        if (resultSchema.error) {
          return res.status(412).json({
            errorMessage: 'The data format is incorrect.',
          });
        }
  
        const { comment_id } = req.params;
        const { comment } = resultSchema.value;
        const cookie = req.cookies;
        const Userlogin = jwt.decode(cookie.refreshToken);
        const user_id = Userlogin.user_id;
  
        const isExist = await Comments.findByPk(comment_id);
        if (!isExist) {
          return res.status(404).json({
            errorMessage: 'Comments do not exist.',
          });
        }
  
        const updateCount = await Comments.update(
          { comment },
          { where: { comment_id, user_id } }
        );
  
        if (updateCount < 1) {
          return res.status(400).json({
            errorMessage: 'Comment editing was not handled properly.',
          });
        }
  
        return res.status(200).json({ message: 'Edited comment.' });
      } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to edit comment.',
        });
      }
}

const deleteComments = async (req, res) => {
    try {
        const { comment_id } = req.params;
        const cookie = req.cookies;
        const Userlogin = jwt.decode(cookie.refreshToken);
        const user_id = Userlogin.user_id;

        const isExist = await Comments.findByPk(comment_id);
        if (!isExist) {
          return res.status(404).json({
            errorMessage: 'Comments do not exist.',
          });
        }
  
        const deleteCount = await Comments.destroy({
          where: { comment_id, user_id },
        });
  
        if (deleteCount < 1) {
          return res.status(400).json({
            errorMessage: 'Comment deletion was not handled properly.',
          });
        }
  
        return res.status(200).json({ message: 'Comment deleted.' });
      } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to delete comment.',
        });
      }
}


module.exports = { searchComments, addComments, deleteComments, putComments, allComments};
