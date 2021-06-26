const ImagesModel = require('../models/imagesModel/images')
const sequelize = require('../config/index')
const Sequelize = require('sequelize')
const Organizations = require ('../modelsConections/organizationModelConections')

const Image = ImagesModel(sequelize, Sequelize)

Organizations.hasMany(Image, {as: 'organization', foreignKey: 'organizationId'})
Image.belongsTo(Organizations)


module.exports = Image