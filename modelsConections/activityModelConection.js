const activitiesModel = require('../models/activityModel/activity');
const sequelize = require('../config/index');
const Sequelize = require('sequelize');

const Activity = activitiesModel(sequelize, Sequelize);
console.log('activity', Activity);
module.exports = Activity;