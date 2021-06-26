const {
  DELETED_SUCCESSFULLY_MEMBER,
  DELETED_NO_MEMBER,
} = require("../../const/const");
const ModelMember = require("../../modelsConections/memberModelConnection");

DeleteMembers = async (req, res) => {
  const { id } = req.params;

  const memberById = await ModelMember.findByPk(id);
  if (memberById) {
    await ModelMember.destroy({
      where: { id },
    });
    res.status(200).json({
      message: DELETED_SUCCESSFULLY_MEMBER,
    });
  } else {
    res.status(400).json({ message: DELETED_NO_MEMBER });
  }
};

module.exports = DeleteMembers;
