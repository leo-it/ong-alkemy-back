const Sequelize = require('sequelize');
const { development } = require('./config');

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect
  }
)

sequelize.sync()

Object.keys(sequelize).forEach(function(modelName) {
  if (sequelize[modelName].associate) {
    sequelize[modelName].associate(sequelize);
  }
});

module.exports = sequelize