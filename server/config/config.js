require('dotenv').config();
const env = process.env;
console.log('aaaaaa', env);

const development = {
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: 'canIBuyCar',
  host: env.DATABASE_HOST,
  dialect: 'mysql',
  port: env.DATABASE_PORT,
};

const production = {
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: 'canIBuyCar',
  host: env.DATABASE_HOST,
  dialect: 'mysql',
  port: env.DATABASE_PORT,
};

const test = {
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: 'canIBuyCar',
  host: env.DATABASE_HOST,
  dialect: 'mysql',
  port: env.DATABASE_PORT,
};

module.exports = {development, production, test};