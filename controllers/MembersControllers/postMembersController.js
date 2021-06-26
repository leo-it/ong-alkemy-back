const { MEMBER_CREATED, CREATE_MEMBER_ERROR } = require('../../const/const')
const { postMembers } = require('../../query/membersQuery/postMembersQuery') 

exports.postMembersController = async(req, res) => {
    try {
        const member = await postMembers(req.body)
        return res.status(200).send({
            status: 200,
            msg: MEMBER_CREATED,
            data: member
        })
    } catch(error) {
        return res.status(400).send({
            status: 400,
            msg: CREATE_MEMBER_ERROR,
            error: error
        })
    }
}