const Members = require('../../modelsConections/memberModelConnection')

exports.postMembers = async(body) => {
    return await Members.create(body)
}