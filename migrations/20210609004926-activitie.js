module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('activities', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      }
    },
    {
      paranoid:true
    }); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('activitie')
  }
};
