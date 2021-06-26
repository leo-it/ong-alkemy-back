const TestimonialsModel = require('../models/testimonialsModel/testimonials');
const sequelize = require('../config/index');
const Sequelize = require('sequelize');

const Testimonials = TestimonialsModel(sequelize, Sequelize);

module.exports = Testimonials;