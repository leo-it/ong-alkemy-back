module.exports = (sequelize, type) => {
  return sequelize.define('media', {
    id:{
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    facebook: {
      type: type.STRING,
    },
    instagram: {
      type: type.STRING,
    },
    linkedin: {
      type: type.STRING,
    },
    organizationId: {
      type: type.INTEGER,
      allowNull: false,
    }
  },
  {
    paranoid: true
  })
}