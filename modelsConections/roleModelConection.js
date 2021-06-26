const sequelize = require('../config/index');
const Sequelize = require('sequelize');
const modelRole = require('../models/roleModel/roleModel')

const Role = modelRole(sequelize, Sequelize);

module.exports = Role;