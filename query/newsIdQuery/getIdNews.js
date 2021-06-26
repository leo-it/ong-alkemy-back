const modelNews = require('../../modelsConections/entriesModelConection')

const queryIdNews = (idNews) =>{
   return modelNews.findOne({
        where: { id: idNews },
        attributes: ['name', 'image', 'createdAt']
    })
    
}

exports.default = queryIdNews

