'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Users',
        'char_1',
        {
          type: Sequelize.STRING,

        }
      ),
      queryInterface.addColumn(
        'Users',
        'char_2',
        {
          type: Sequelize.STRING,

        }
      ),
      queryInterface.addColumn(
        'Users',
        'char_3',
        {
          type: Sequelize.STRING,

        }
      ),
      queryInterface.addColumn(
        'Users',
        'char_4',
        {
          type: Sequelize.STRING,

        }
      ),
      queryInterface.addColumn(
        'Users',
        'char_5',
        {
          type: Sequelize.STRING,

        }
      )
    ]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
