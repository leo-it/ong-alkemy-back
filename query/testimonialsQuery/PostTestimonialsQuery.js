const Testimonials = require('../../modelsConections/testimonialsModelConection');
const { validationResult} = require('express-validator');
const { TESTIMONY_CREATED, ERROR } = require('../../const/const');

const PostTestimonials = async (req, res) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
      }  
        try {
            
            const newTestimony = await Testimonials.create({
            name: req.body.name,
            image: req.body.image,
            content: req.body.content            
        }); 
        return res.json({
            status: 200,
            message: TESTIMONY_CREATED,
            newTestimony
        }); 
    } catch (error) {
            res.json({
                status: 500,
                message: ERROR
            })
        }
    };

module.exports = PostTestimonials;