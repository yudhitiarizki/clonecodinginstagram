const {
  Posts,
  Comments,
  Likes,
  sequelize,
  Sequelize,
  Users,
} = require('../models');
const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
  });

  const RE_TITLE = /^[a-zA-Z0-9\s\S]{1,40}$/;
  const RE_HTML_ERROR = /<[\s\S]*?>/; 
  const RE_DESCRIPTION = /^[\s\S]{1,3000}$/; 

const allPosts = async (req, res) => {
    try {
        const likes = await Likes.findAll();
  
        const postsQuery = `
                  SELECT p.post_id, u.user_id, u.name, p.title, p.description, p.image, p.createdAt, p.updatedAt
                  FROM Posts AS p
                  JOIN Users AS u
                  ON p.user_id = u.user_id
                  ORDER BY p.post_id DESC`;
  
        let posts = await sequelize.query(postsQuery, {
          type: Sequelize.QueryTypes.SELECT,
        });

        posts = posts.map((post) => {
          return {
            ...post,
            likes: likes.filter((like) => like.post_id === post.id).length,
          };
        });
        posts.sort((a, b) => b.createdAt - a.createdAt);
  
        return res.status(200).json({ data: posts });
      } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to retrieve post.',
        });
      }
}

const addPost = async (req, res) => {
    try {
        const resultSchema = postSchema.validate(req.body);
        if (resultSchema.error) {
          return res.status(412).json({
            errorMessage: 'The data format is incorrect.',
          });
        }
  
        const { title, description, image } = resultSchema.value;
        const { user_id } = res.locals.user;
  
        if (
          !isRegexValidation(title, RE_TITLE) ||
          isRegexValidation(title, RE_HTML_ERROR)
        ) {
          return res.status(412).json({
            errorMessage: 'The format of the post title does not match.',
          });
        }
        if (!isRegexValidation(description, RE_DESCRIPTION)) {
          return res.status(412).json({
            errorMessage: 'The format of the post description does not match.',
          });
        }
  
        await Posts.create({ user_id, title, description, image });
        return res.status(201).json({ message: 'You have succeeded in writing a post.' });
      } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to write post.',
        });
    }
}

const deletePost = async (req, res) => {
    try {
        const post_id  = req.params.post_id;
        const { user_id } = res.locals.user;
  
        const post = await Posts.findByPk(post_id);
        if (!post) {
          return res.status(404).json({
            errorMessage: 'The post does not exist.',
          });
        }
  
        const deleteCount = await Posts.destroy({ where: { post_id, user_id } });
  
        if (deleteCount < 1) {
          return res.status(401).json({
            errorMessage: 'The post was not properly deleted.',
          });
        }
  
        return res.status(201).json({ message: 'Post deleted.' });
      } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        return res.status(400).json({
          errorMessage: 'Failed to delete post.',
        });
      }
}

module.exports = { allPosts, addPost, deletePost };