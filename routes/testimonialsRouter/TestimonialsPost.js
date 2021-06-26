const express = require('express');
const router = express.Router();
const TestimonyValidator = require('../../helpers/testimonials/TestimonyValidator');
const TestimonialsPostController = require('../../controllers/testimonialsControllers/TestimonialsPostController')

router.post('/', TestimonyValidator.PostValidator, TestimonialsPostController);

module.exports = router;    