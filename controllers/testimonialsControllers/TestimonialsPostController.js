const PostTestimonials = require('../../query/testimonialsQuery/PostTestimonialsQuery');

TestimonialsPostController = async (req, res) => {
    return await PostTestimonials(req, res)
};

module.exports = TestimonialsPostController;