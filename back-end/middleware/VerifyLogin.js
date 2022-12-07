const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const cookies = req.cookies.refreshToken;
    
    if (!cookies) {
      return res.status(403).send({
        errorMessage: 'This feature requires login.',
      });
    }


    const { user_id } = jwt.verify(cookies, process.env.REFRESH_TOKEN_SECRET);
    const user = await Users.findByPk(user_id);

    res.locals.user = user;
    next();
  } catch (error) {
    console.trace(error);
    return res.status(403).send({
      errorMessage: 'This feature requires login.',
    });
  }
};
