const express = require("express");
const router = express.Router();
const getMembersController = require("../../controllers/membersControllers/getMembersController");

router.get("/", /*middlewareAdmin*/ getMembersController);

module.exports = router;
