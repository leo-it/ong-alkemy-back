const { MSG_UPDATE_ACTIVITIES, ERROR_FOR_ID_ACT, ERROR_ACTIVITIES } = require("../../const/const");
//complete when the model is finished, in post too//
const Activities = require("../../models/activityModel/activity");

const PutActivities = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, content, image, categoryId} = req.body;
    const update = { name, content, image, categoryId};
    const activitiesID = await Activities.findByPk(req.params.id);
    if (activitiesID) {
      await Activities.update(update, { where: { id } });
      return res.status(200).json({ message:MSG_UPDATE_ACTIVITIES, data: update});
    } else {
      return res.status(404).json({ ERROR_FOR_ID_ACT });
    }
  } catch (error) {
    return res.status(404).json({ ERROR_ACTIVITIES });
  }
};

exports.PutActivities = PutActivities;