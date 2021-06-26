const deleteNewById = require('../../query/newsQuery/DeleteNews');

const { DELETED_SUCCESSFULLY } = require('../../const/const');

const deleteNews = (req, res) => {
  const { id } = req.params;
  
  deleteNewById(id)
    .then(() => {
      res.json({ message: DELETED_SUCCESSFULLY });
    }) 
    .catch (error => {
      res.status(404).json({ error })
    });
}

module.exports = deleteNews;