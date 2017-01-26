'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users",[
      {
        name : "Eri Irawan",
        birthdate:"1991-02-01",
        character:"['listener','includer','ideas','responsibillty','woo']",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name : "Radit prasetia",
        birthdate:"1991-02-01",
        character:"['listener','adaptive','ideas','test','sample']",
        createdAt:new Date(),
        updatedAt:new Date()
      }
  ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
