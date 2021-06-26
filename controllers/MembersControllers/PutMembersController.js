const PutMembersQuery = require('../../query/membersQuery/PutMembersQuery');

PutMembersController = async (req, res) => {
    return await PutMembersQuery.update(req, res)
};

module.exports = PutMembersController;