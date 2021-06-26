const modelNews = require('../../modelsConections/entriesModelConection');
const modelCategories = require('../../modelsConections/categoryModelConection');

const queryAllNews = () => modelNews.findAll({
    include: { model: modelCategories, as: "category", attributes: ['name'] },
    attributes: ['id', 'name', 'image', 'createdAt']
});

module.exports = queryAllNews
