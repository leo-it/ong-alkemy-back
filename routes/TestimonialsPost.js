const express = require('express');
const router = express.Router();
const TestimonyValidator = require('../helpers/validators/TestimonyValidator');
const TestimonialsPostController = require('../controllers/TestimonialsPostController')

router.post('/', TestimonyValidator.PostValidator, TestimonialsPostController);

module.exports = router;    