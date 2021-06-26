const express = require("express");
const router = express.Router();

const testimonialsIdPutController = require("../../controllers/testimonialsControlles/testimonialsIdPutController");

router.put("/:id", /*middlewareAdmin*/testimonialsIdPutController);

module.exports = router;
