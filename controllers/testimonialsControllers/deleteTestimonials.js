const { deleteTestimonyById } = require('../../query/testimonialsQuery/DeleteTestimonials')
const { DELETED_SUCCESSFULLY_TESTIMONY } = require('../../const/const')

 exports.DeleteTestimonials = async (req, res) => {
  try {
    const { id } = req.params;
    let testimonyDeleted = await deleteTestimonyById(id)
      .then(res.json({
        message: DELETED_SUCCESSFULLY_TESTIMONY
      }))
  } catch (error) {
    return res.status(404).json({ error })
  }
}
/* module.exports = DeleteTestimonials;
 */