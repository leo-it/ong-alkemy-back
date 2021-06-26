const modelCategory = require('../../modelsConections/categoryModelConection');

const deleteCategoryById = (id) => {
  return modelCategory.destroy({ where: { id } });
}

module.exports = deleteCategoryById;