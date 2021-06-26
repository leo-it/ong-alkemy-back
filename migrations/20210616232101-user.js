'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('users', { 
      id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
  },
  name:{
      type:Sequelize.STRING,
      notNull:true,
  },
  lastname:{
      type:Sequelize.STRING
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
},
{
  paranoid:true
});
     
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.dropTable('users');
    
  }
};
