const Testimonials = require("../../modelsConections/testimonialsModelConection");

const getTestimonials = () => {
  return Testimonials.findAll();
};

module.exports = getTestimonials;
