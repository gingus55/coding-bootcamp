const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Music extends Model {}

const schema = {
  title: {
    type: DataTypes.STRING,
  },
  artist: {
    type: DataTypes.STRING,
  },
  length: {
    type: DataTypes.INTEGER,
  },
  genre: {
    type: DataTypes.STRING,
  },
};

const options = {
  sequelize,
  timestamps: false,
  underscored: false,
  modelName: "book",
};

Music.init(schema, options);

module.exports = Music;
