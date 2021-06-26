

const {
  NAME_FIRST,
  NAME_SECOND,
  NAME_THIRD,
  LAST_NAME_FIRST,
  LAST_NAME_SECOND,
  LAST_NAME_THIRD,
  EMAIL_FIRST,
  EMAIL_SECOND,
  EMAIL_THIRD,
  PASSWORD_FIRST,
  PASSWORD_SECOND,
  PASSWORD_THIRD,
  ROLE_USER,
  ROLE_ADMIN,
  NAME_ADMIN,
  NAME_ADMIN_2,
  LAST_NAME_ADMIN,
  LAST_NAME_ADMIN_2,
  EMAIL_ADMIN,
  EMAIL_ADMIN_2,
  PASSWORD_ADMIN,
  PASSWORD_ADMIN_2
} = require('../const/const.user.seeders')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('users', [{
        name: NAME_FIRST,
        lastname: LAST_NAME_FIRST,
        email: EMAIL_FIRST,
        password: PASSWORD_FIRST,
        roleId: ROLE_USER,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
       name: NAME_SECOND,
       lastname: LAST_NAME_SECOND,
       email: EMAIL_SECOND,
       password: PASSWORD_SECOND,
       roleId: ROLE_USER,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: NAME_THIRD,
      lastname: LAST_NAME_THIRD,
      email: EMAIL_THIRD,
      password: PASSWORD_THIRD,
      roleId: ROLE_USER,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: NAME_ADMIN,
      lastname: LAST_NAME_ADMIN,
      email: EMAIL_ADMIN,
      password: PASSWORD_ADMIN,
      roleId: ROLE_ADMIN,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: NAME_ADMIN_2,
      lastname: LAST_NAME_ADMIN_2,
      email: EMAIL_ADMIN_2,
      password: PASSWORD_ADMIN_2,
      roleId: ROLE_ADMIN,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('users', null, {});
    
  }
};
