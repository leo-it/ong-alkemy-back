const sequelize = require('../config/index')
const Sequelize = require('sequelize')
const EntriesModel = require('../models/entriesModel/entriesModel')
const Category = require('../modelsConections/categoryModelConection')

const Entries = EntriesModel(sequelize, Sequelize)


Category.hasMany(Entries, {as:'category', foreignKey: 'categoryId'})
Entries.belongsTo(Category, {as:"category"})

module.exports = Entries