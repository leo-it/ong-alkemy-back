//complete when the model is finished//
const News = require("../../modelsConections/entriesModelConection");
const {
  NEWS_POST,
  NEWS_TYPE_NEWS,
  NEWS_INSUFFICIENT_PROPERTIES,
} = require("../../const/const");

const POSTNews = async (req, res) => {
  try {
    const { name, content, image, categoryId } = req.body;
    if (name && content && image && categoryId) {
      await News.create({
        name,
        content,
        image,
        categoryId,
        type: NEWS_TYPE_NEWS,
      });
      return res.status(200).json({ message: NEWS_POST });
    } else {
      return res.status(404).json({ error: NEWS_INSUFFICIENT_PROPERTIES });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

exports.POSTNews = POSTNews;
