const MemberModel = require('../models/membersModel/members.model');
const sequelize = require('../config/index');
const Sequelize = require('sequelize');

const Members = MemberModel(sequelize, Sequelize);

module.exports = Members;