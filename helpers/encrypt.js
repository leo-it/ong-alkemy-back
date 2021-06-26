const bcrypt = require('bcrypt');

exports.encrypt = async ( pass ) => {
    const hash = await bcrypt.hash(pass,6);
    return hash;
}

exports.decrypt = async( pass, userPass) => {
    const passOk = await bcrypt.compare(pass, userPass);
    return passOk;
}