const express = require("express");
const router = express.Router()
const activitiesControllers = require('../../controllers/ActivitiesControllers/PostActivities');

router.post('/', activitiesControllers.PostActivities)

module.exports = router