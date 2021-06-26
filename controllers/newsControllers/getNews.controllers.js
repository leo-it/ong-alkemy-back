const queryAllNews = require('../../query/newsQuery/getNews')
const {NEWS_FOUND} = require('../../const/const')

const GETNews = async (req, res) =>{
    try {
        const getNews =  await queryAllNews()
        return res.status(200).json({data: getNews, message: NEWS_FOUND})
    } catch (error) {
        return res.status(404).json({error: error})
    }
}

module.exports = GETNews