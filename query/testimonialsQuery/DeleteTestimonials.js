const modelTestimony = require('../../modelsConections/testimonialsModelConection')

exports.deleteTestimonyById = async (id) => {
  return modelTestimony.findAll({
    where: { id },
  }).then((result) => {
    return modelTestimony.destroy({
      where: { id },
    })
  })
}
/* module.exports = deleteTestimonyById;
 */