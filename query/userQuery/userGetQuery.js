const User = require('../../modelsConections/userModelConection')

exports.userGet = async() => {
    return await User.findAll()
}