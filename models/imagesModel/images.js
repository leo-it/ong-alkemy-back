module.exports = (sequelize, type) => {
    return sequelize.define('images', {
        imageURL: {
            type: type.STRING,
            allowNull: false
        },
        text: {
            type: type.STRING,
            allowNull: false
        },
        imageName: {
            type: type.STRING,
            allowNull: false
        },
        file: {
            type: type.BLOB,
        },
        organizationId: type.INTEGER,

        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })
}


