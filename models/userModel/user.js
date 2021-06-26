module.exports = (sequelize, type) => {
    return sequelize.define('User',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        name:{
            type:type.STRING,
            notNull:true,
        },
        lastname:{
            type:type.STRING
        },
        email: type.STRING,
        password: type.STRING,
    },
    {
        paranoid:true
    });
    
}
