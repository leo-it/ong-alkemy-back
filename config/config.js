require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
    }
  },
  test: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
    }
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    dialect: 'mysql',
    dialectOptions: {
      /*
        dialect options
      */
    }
  }
};
