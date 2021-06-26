// testimonials returns the value [1] if I update a record or [0] if I do not update any record.
//Does not return information that has just been updated
const { ARRAYMESSAGE } = require("../../const/const");

const validatePutTestimonials = (testimonials, res) => {
   const sendMessage = ARRAYMESSAGE.filter(
    (message) => message.value === testimonials[0]
  );

  res.status(sendMessage[0].status).json({
    message: sendMessage[0].message,
  });
};

module.exports = validatePutTestimonials;
