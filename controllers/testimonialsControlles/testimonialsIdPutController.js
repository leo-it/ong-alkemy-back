const express = require("express");
const validatePutTestimonials = require("../../helpers/testimonials/validatePutTestimonials");
const putIdtestimonials = require("../../query/testimonialsQuery/putIdtestimonials");


const testimonialsIdPutRouter = async (req, res, next) => {
  const { id } = req.params;
  const testimonials = await putIdtestimonials(id, req.body);
  validatePutTestimonials(testimonials, res);
};

module.exports = testimonialsIdPutRouter;
