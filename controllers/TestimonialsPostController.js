const PostTestimonials = require('../query/PostTestimonialsQuery');

TestimonialsPostController = async (req, res) => {
    return await PostTestimonials(req, res)
};

module.exports = TestimonialsPostController;