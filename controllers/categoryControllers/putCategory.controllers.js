const { CATEGORIES_UPDATE, CATEGORIES_ID_ERROR } = require("../../const/const");
const Category = require("../../modelsConections/categoryModelConection");

const PUTCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await Category.findByPk(req.params.id);
        if (category) {
            Category.update({name: name}, {where: {id}});
            return res.status(200).json({ message: CATEGORIES_UPDATE });
        } else {
            return res.status(404).json({ error: CATEGORIES_ID_ERROR });
        }
    } catch (error) {
        return res.status(404).json({ error: error });
    }
};

exports.PUTCategory = PUTCategory;