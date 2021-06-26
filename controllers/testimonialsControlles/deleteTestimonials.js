const { DELETED_SUCCESSFULLY_TESTIMONY, DELETED_NO_TESTIMONY } = require('../../const/const');
const ModelTestimony = require("../../modelsConections/testimonialsModelConection");



const modelMember = require("../../modelsConections/memberModelConnection");

DeleteTestimonials = async (req, res) => {
  const { id } = req.params;

  const modelTestimony = await ModelTestimony.findByPk(id);
  if (modelTestimony) {
    await ModelTestimony.destroy({
      where: { id },
    });
    res.status(200).json({
      message: DELETED_SUCCESSFULLY_TESTIMONY,
    });
  } else {
    res.status(400).json({ message: DELETED_NO_TESTIMONY});
  }
};

module.exports = DeleteTestimonials;
