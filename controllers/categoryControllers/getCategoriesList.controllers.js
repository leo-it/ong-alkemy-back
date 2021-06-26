const queryCategoriesList = require('../../query/categoryQuery/getCategoriesList.query');
const {CATEGORIES_FOUND} = require('../../const/const');

const GETCategoriesList = async (req, res) => {
    try {
        const categoriesList = await queryCategoriesList();
        return res.status(200).json({data: categoriesList, message: CATEGORIES_FOUND});
    } catch (error) {
        return res.status(404).json({error: error});
    }
}

exports.GETCategoriesList = GETCategoriesList;