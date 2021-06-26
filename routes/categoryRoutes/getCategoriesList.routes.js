const express = require('express');
const router = express.Router();
const GETCategoriesList = require("../../controllers/categoryControllers/getCategoriesList.controllers");
//const middlewareUser = require('../../helpers/userToken/decryptTokenHelpers')

//middlewareUser makes sure that only a signed in user can get the news
router.get('/', /*middlewareUser.getTokenInfo*/ GETCategoriesList.GETCategoriesList);

module.exports = router;