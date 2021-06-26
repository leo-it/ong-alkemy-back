const sequelize = require('../config/index');
const Sequelize = require('sequelize');
const modelMedia = require('../models/mediaModel/media');
const Organizations = require('../modelsConections/organizationModelConections')

const Media = modelMedia(sequelize, Sequelize);


Organizations.hasMany(Media, { foreignKey: 'organizationId'} )
Media.belongsTo(Organizations);

module.exports = Media;