const { NEWS_UPDATE, NEWS_ID_ERROR } = require("../../const/const");
//complete when the model is finished, in post too//
const News = require("../../modelsConections/entriesModelConection");

const PUTNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content, image, categoryId, type } = req.body;
    const update = { name, content, image, categoryId, type};
    const news = await News.findByPk(req.params.id);
    if (news) {
      await News.updateOne(update, { where: { id } });
      return res.status(200).json({ data: update, message: NEWS_UPDATE });
    } else {
      return res.status(404).json({ error: NEWS_ID_ERROR });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

exports.PUTNews = PUTNews;
