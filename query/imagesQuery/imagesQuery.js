const Image = require('../../modelsConections/imageModelConection')

exports.postImage = async(body) => {
    return await Image.create(body)
}