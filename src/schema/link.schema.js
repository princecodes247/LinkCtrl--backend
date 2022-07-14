const { DataTypes } = require('sequelize');
const shortid = require('shortid');
const { DBPointer } = require('../config');

const Link = DBPointer.define('Link', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  linkTag: {
    type: DataTypes.STRING,
    default: shortid.generate(),
  },
  name: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: '',
    // allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: '',
  },

  max_clicks: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  clicks: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  expires: {
    type: DataTypes.DATE || null,
    default: null,
  },
  dataTypes: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  data: {
    type: DataTypes.JSON,
    defaultValue: {},
  },

  isPrivate: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Link;
