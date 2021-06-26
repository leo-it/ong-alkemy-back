const { postImage } = require('../../query/imagesQuery/imagesQuery')

exports.postImageController = async(req, res) => {
    try {
        const image = await postImage({imageURL: req.data.Location, text: req.body.text})
        return res.status(200).send({
            image
        })
    } catch(err) {
        return err
    }
}