const deleteCategoryById = require('../../query/categoryQuery/deleteCategory');

const { CATEGORY_DELETED_SUCCESSFULLY } = require('../../const/const');

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  deleteCategoryById(id)
    .then(() => {
      res.json({message: CATEGORY_DELETED_SUCCESSFULLY});
    })
    .catch (error => {
      res.status(404).json({ error })
    });
}

module.exports = deleteCategory;