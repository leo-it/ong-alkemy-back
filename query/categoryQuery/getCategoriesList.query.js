const modelCategories = require('../../modelsConections/categoryModelConection')

const queryCategoriesList = async() => modelCategories.findAll({
    attributes: ['id', 'name', 'description']
});

module.exports = queryCategoriesList;