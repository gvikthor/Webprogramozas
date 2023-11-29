'use strict';
const {
  Model
} = require('sequelize');
const genre = require('./genre');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Rating)
      this.belongsToMany(models.Genre, { through : 'GenreMovie'})
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    description: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    ratingsEnabled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};