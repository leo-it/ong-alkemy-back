const express = require("express");
const router = express.Router();

const deleteMembersControllers = require("../../controllers/membersControllers/deleteMembersController");

router.delete("/:id", /*middlewareAdmin*/deleteMembersControllers);

module.exports = router;
