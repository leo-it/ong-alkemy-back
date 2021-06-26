const express = require("express");
const router = express.Router();
const newsControllers = require("../../controllers/newsControllers/putNews.controllers");
const { ValidationsHelper, validationError } = require('../../helpers/validators/validator-put-news')
//const Auth = require("../../helpers/middlewareAdmin");

router.get("/:id", ValidationsHelper,validationError, newsControllers.PUTNews);

module.exports = router;