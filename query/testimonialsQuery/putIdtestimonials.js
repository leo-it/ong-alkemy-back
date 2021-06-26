const Testimonials = require("../../modelsConections/testimonialsModelConection");

const putIdtestimonials = (id, data) => {
  return Testimonials.update(
    { name: data.name, image: data.image, content: data.content },
    {
      where: {
        id: id,
      },
    }
  );
};

module.exports = putIdtestimonials;
