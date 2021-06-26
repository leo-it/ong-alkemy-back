const express = require("express");
const router = express.Router()
const {getIdNews} = require('../../controllers/newIdControllers/getIdNews.controllers');

router.get('/', getIdNews)

module.exports = router