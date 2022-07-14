const { DataTypes } = require('sequelize');
const shortid = require('shortid');
const { DBPointer } = require('../config');

const Token = DBPointer.define('Token', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  token: {
    type: DataTypes.STRING,
    default: shortid.generate(),
  },
  userId: {
    type: DataTypes.STRING,
    // allowNull: false,
  },

  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Token;
