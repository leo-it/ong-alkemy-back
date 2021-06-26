const Activities = require("../../models/activityModel/activity");
const {
  ACTIVITIESPOST,
  ERROR_FOR_INSUFIENTPROPS

} = require("../../const/const");

const PostActivities = async (req, res) => {
  try {
    const { name, content, image, categoryId } = req.body;
    if (name && content && image && categoryId) {
      await Activities.create({
        name,
        content,
        image,
        categoryId
      });
      return res.status(200).json({ message: ACTIVITIESPOST });
    } else {
      return res.status(404).json({ error: ERROR_FOR_INSUFIENTPROPS });
    }
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

exports.PostActivities = PostActivities;
