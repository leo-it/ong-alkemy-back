const User = require('../../modelsConections/userModelConection')
const Role = require('../../modelsConections/roleModelConection')
const { USER_NOT_FOUND, USER_FOUND, INVALID_PASS, INVALID_EMAIL } = require('../../const/const')

const { getToken } = require ('../../helpers/userToken/userGetToken');

const crypt = require('../../helpers/encrypt')

exports.login = async (req, res) => {
  let { password, email } = req.body

  try {
    // search user by email
    const user = await User.findOne({
      where: { email: email},
      include: {model: Role,  attributes: ['role']},
    })

    if (!user) {
      return res.status(400).send({
        status: 400,
        message: INVALID_EMAIL,
        ok: false,
      })
    }
    // decrypt password
    const pass = await crypt.decrypt(password, user.password)
    
    if (!pass) {
      return res.status(400).send({
        status: 400,
        ok: false,
        message: INVALID_PASS
      })
    } 

    return res.status(200).send({
      status: 200,
      message: USER_FOUND,
      token: getToken (user)
    })
  }
  catch (error) {
    return res.status(404).send({
      status: 400,
      ok: false,
      errors: error,
      message: USER_NOT_FOUND
    })
  }
}