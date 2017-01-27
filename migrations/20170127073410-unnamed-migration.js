'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("Result_details",
      "UserId",
      {type:Sequelize.INTEGER}
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn("Result_details",
      "UserId",
      {type:Sequelize.INTEGER}
    )
  }
};
