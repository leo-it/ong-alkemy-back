const express = require("express");
const router = express.Router();
const activitiesControllers = require("../../controllers/ActivitiesControllers/PutActivities");

router.patch("/:id",activitiesControllers.PutActivities);

module.exports = router;
