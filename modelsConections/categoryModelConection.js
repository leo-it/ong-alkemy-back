const CategoriesModel = require('../models/categoryModel/category');
const sequelize = require('../config/index');
const Sequelize = require('sequelize');

const Category = CategoriesModel(sequelize, Sequelize);

module.exports = Category;