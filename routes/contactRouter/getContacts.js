const express = require("express");
const router = express.Router();
const getContactController = require("../../controllers/contactsControllers/getContactController");

router.get("/", /*middlewareAdmin*/ getContactController);

module.exports = router;
