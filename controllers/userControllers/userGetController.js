const { USERS_FOUND, USERS_NOT_FOUND } = require('../../const/const')
const userGetQuery = require('../../query/userQuery/userGetQuery')

exports.userGetController = async(req, res) => {
    try {
        const users = await userGetQuery.userGet()
        return res.status(200).send({
            status: 200,
            msg: USERS_FOUND,
            users: users
        })
    } catch(error) {
        return res.status(400).send({
            status: 400,
            msg: USERS_NOT_FOUND,
            error: error
        })
    }
}
