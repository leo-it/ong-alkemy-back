require('dotenv').config()
const multer = require('multer')
const AWS = require('aws-sdk');

//esto es para obtener los permisos
const s3 = new AWS.S3({
    credentials: {
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET,
    },
});

const storage = multer.memoryStorage({
    destination: function(req, file, callback) {
        callback(null, '')
    }
})

const upload = multer({storage}).single('file')


exports.awsSDK=[ upload , (req, res, next) => {

    
    const myFile = req.file.originalname;

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${myFile}`,
        Body: req.file.buffer,
        ACL:"public-read",
        ContentType:"image/png"
    }

    s3.upload(params, (error, data) => {
        if(error){
           return error;
        }
        req.data = data;
        next()
    })

}
]