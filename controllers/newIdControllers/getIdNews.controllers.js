const queryIdNews = require('../../query/newsIdQuery/getIdNews')
const {NEWS_ID_FOUND} = require('../../const/const')

exports.getIdNews = async (req, res) =>{
    try {
        const getIdNews =  await queryIdNews(req.params.idNews)
        return res.status(200).json({data: getIdNews, message: NEWS_ID_FOUND})
    } catch (error) {
        return res.status(404).json({error: error})
    }
}
