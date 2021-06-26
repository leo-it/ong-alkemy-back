const OrganizationsModel = require('../models/organizationModel/organizations')
const sequelize = require('../config/index')
const Sequelize = require('sequelize')

const Organizations = OrganizationsModel(sequelize, Sequelize);

module.exports = Organizations