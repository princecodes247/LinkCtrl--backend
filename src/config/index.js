require('dotenv').config();

const env = process.env.NODE_ENV;
const sequelize = require('./sequelize.config');

const production = {};

const environments = {
  development: {
    APP_NAME: 'linkctrl-dev',
    MONGODB_URI: 'mongodb://localhost/linkctrl--backend',
    DB_URI: process.env.DB_URI,
    JWT_SECRET: 'XXXX-XXXX-XXXX',
    BCRYPT_SALT: 10,
    role: {
      ADMIN: ['admin'],
      USER: ['user', 'admin'],
    },

    url: {
      CLIENT_URL: 'http://localhost:8080',
      BASE_URL: 'http://localhost:8080',
    },
    mailer: {
      HOST: '',
      USER: '',
      PASSWORD: '',
      PORT: '',
      SECURE: '',
      DOMAIN: '',
    },
  },
  production,
  DBPointer: sequelize,
};

// export config for the current environment
// module.exports = environments[env] || environments.production;
module.exports = environments.development;
