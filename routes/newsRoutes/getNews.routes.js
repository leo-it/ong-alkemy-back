const express = require("express");
const router = express.Router();
const GETNews = require('../../controllers/newsControllers/getNews.controllers');
//const middlewareUser = require('../../helpers/userToken/decryptTokenHelpers')

//middlewareUser makes sure that only a signed in user can get the news
router.get('/',  /*middlewareUser.getTokenInfo*/ GETNews);

module.exports = router;