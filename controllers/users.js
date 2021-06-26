const User = require('../modelsConections/userModelConection');
const { encrypt, decrypt } = require('../helpers/encrypt');
const { ERROR, URL_HOME } = require('../const/const');
const { getToken } = require('../helpers/userToken/userGetToken')


exports.register = async (req, res) => {
    try {

        const body = req.body;
        const pass = await encrypt(body.password);
        body.password = pass;
        const user = await User.create(body)

        return res.status(200).json({
            user,
            token: getToken(user)
        }).redirect(URL_HOME)

    } catch (error) {
        res.status(500).send(ERROR);
    }
}
