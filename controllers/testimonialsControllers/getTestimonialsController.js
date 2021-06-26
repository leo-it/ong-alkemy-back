const express = require("express");
const getTestimonialsQuery = require("../../query/testimonialsQuery/getTestimonials");

const {
  GET_MESSAGE_TESTIMONIAL,
  GET_MESSAGE_TESTIMONIAL_ERROR,
} = require("../../const/const");
const getTestimonialsController = async (req, res, next) => {
  try {
    const testimonials = await getTestimonialsQuery();
    if (testimonials) {
      res.status(200).json({
        data: testimonials,
        message: GET_MESSAGE_TESTIMONIAL,
      });
    } else {
      res.status(404).json({
        message: GET_MESSAGE_TESTIMONIAL_ERROR,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
module.exports = getTestimonialsController;
