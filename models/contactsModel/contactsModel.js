module.exports = (sequelize, type) => {
    return sequelize.define('contacts', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
        },
        phone: {
            type: type.INTEGER,
        },
        email: {
            type: type.STRING,
            validate: {
                isEmail: true,
            }
        },
        message: {
            type: type.TEXT,
        },
    },
    {
        paranoid: true,
    })
}