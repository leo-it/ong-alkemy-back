module.exports = (sequelize, type) => {
  return sequelize.define('members', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
    },
    image: {
      type: type.STRING
    }
  });
}