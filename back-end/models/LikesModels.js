'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Likes.init(
    {
      like_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      post_id: {
        required: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        required: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Likes',
    }
  );
  Likes.associate = function (models) {
    models.Likes.hasMany(models.Users, {
      foreignKey: 'user_id',
      onDelete: 'cascade',
    });
  };
  Likes.associate = function (models) {
    models.Likes.hasMany(models.Posts, {
      foreignKey: 'post_id',
      onDelete: 'cascade',
    });
  };
  return Likes;
};

