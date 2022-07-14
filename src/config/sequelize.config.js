const { Sequelize } = require('sequelize');
const { MONGODB_URI } = require('./index');

console.log(MONGODB_URI, 'DnB_URI');
const sequelize = new Sequelize(DB_URI, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
