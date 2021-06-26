const express = require("express");
const router = express.Router();

const deleteTestimonialsControllers = require("../../controllers/testimonialsControlles/deleteTestimonials");

router.delete("/:id", /*middlewareAdmin*/deleteTestimonialsControllers);

module.exports = router;
