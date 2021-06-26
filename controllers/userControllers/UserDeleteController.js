const UserDeleteQuery = require('../../query/userQuery/UserDeleteQuery')

UserDeleteController = async (req, res) => {
    return await UserDeleteQuery.delete(req, res)
};

module.exports = UserDeleteController;