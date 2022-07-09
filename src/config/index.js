const env = process.env.NODE_ENV;
const development = require('./env/dev.env.json');
const production = require('./env/prod.env.json');

const environments = {
  development,
  production,
};

// export config for the current environment
module.exports = environments[env] || environments.production;
