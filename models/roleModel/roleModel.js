module.exports = (sequelize, type) => {
    return sequelize.define('role',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        role:{
            type:type.STRING,
            notNull:true,
        },
    },
    {
        paranoid:true
    }); 
}