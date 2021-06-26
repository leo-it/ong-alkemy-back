const { CONTENT_FIRST, NAME_FIRST, NAME_SECOND, CONTENT_SECOND, NAME_THIRD, CONTENT_THIRD, NAME_FOURTH, CONTENT_FOURTH, NAME_FIFTH, CONTENT_FIFTH, URL_FIRST, URL_SECOND, URL_THIRD, URL_FOURTH, URL_FIFTH } = require("../const/const");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('activities', [{
        name: NAME_FIRST,
        image: URL_FIRST,
        content: CONTENT_FIRST
      },
      {
        name: NAME_SECOND,
        image: URL_SECOND,
        content: CONTENT_SECOND,
      },
      {
        name: NAME_THIRD,
        image: URL_THIRD,
        content: CONTENT_THIRD,
      },
      {
        name: NAME_FOURTH,
        image: URL_FOURTH,
        content: CONTENT_FOURTH
      }, 
      {
        name: NAME_FIFTH,
        image: URL_FIFTH,
        content: CONTENT_FIFTH
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {})
  }
};
