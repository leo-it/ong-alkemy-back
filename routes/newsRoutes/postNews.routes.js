const express = require("express");
const router = express.Router()
const newsControllers = require('../../controllers/newsControllers/POSTNews.controllers');
const { getTokenInfo } = require('../../helpers/userToken/decryptTokenHelpers')

router.post('/', /* getTokenInfo, */ newsControllers.POSTNews)

module.exports = router