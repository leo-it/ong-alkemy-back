const modelNews = require('../../modelsConections/entriesModelConection')

const deleteNewById = (id) => {
  return modelNews.destroy ({ where: { id } })
}

module.exports = deleteNewById;