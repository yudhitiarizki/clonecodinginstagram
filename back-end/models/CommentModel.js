'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      // define association here
    }
  }

  Comments.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        post_id: {
            type: DataTypes.INTEGER
        },
        comment: {
            type: DataTypes.STRING
        },
    },
    {
      sequelize,
      modelName: 'Comments',
    }
  );
  Comments.associate = function (models) {
    models.Comments.hasMany(models.Users, {
      foreignKey: 'user_id',
      onDelete: 'cascade',
    });
  };
  Comments.associate = function (models) {
    models.Comments.hasMany(models.Posts, {
      foreignKey: 'post_id',
      onDelete: 'cascade',
    });
  };
  return Comments;
};
