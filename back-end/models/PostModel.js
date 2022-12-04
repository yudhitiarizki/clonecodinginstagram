'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Posts.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.STRING
        },
    },
    {
      sequelize,
      modelName: 'Posts',
    }
  );
  Posts.associate = function (models) {
    models.Posts.hasMany(models.Users, {
      foreignKey: 'user_id',
      onDelete: 'cascade',
    });
  };
  return Posts;
};

