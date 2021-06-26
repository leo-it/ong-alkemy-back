const express = require("express");
const router = express.Router()
const categoryControllers = require('../../controllers/categoryControllers/POSTCategory.controllers');
//const { getTokenInfo } = require('../../helpers/userToken/decryptTokenHelpers');

router.post('/', /* getTokenInfo, */ categoryControllers.POSTCategory)

module.exports = router;