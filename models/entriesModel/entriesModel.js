module.exports = (sequelize, type) => {
    return sequelize.define('entries', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        content: {
            type: type.TEXT,
            allowNull: false,
        },
        image: {
            type: type.STRING,
            allowNull: false,
        },
        categoryId: {
            type: type.INTEGER,
            allowNull: false,
        },
        type: {
            type: type.STRING,
        }
    },
    {
        paranoid: true,
    })
}