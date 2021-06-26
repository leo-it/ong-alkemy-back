const UserLoginQuery = require('../../query/userQuery/UserLoginQuery')

exports.UserLoginController = async (req, res) => {
    return await UserLoginQuery.login(req, res)
}