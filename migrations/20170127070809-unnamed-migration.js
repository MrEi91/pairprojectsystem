'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
//   return queryInterface.addColumn("Users",
//    "char_1",
//     sequelize:STRING
//   // {
//   //   "char_2",
//   //   sequelize:STRING
//   // },
//   // {
//   //   "char_3",
//   //   sequelize:STRING
//   // },
//   // {
//   //   "char_4",
//   //   sequelize:STRING
//   // },
//   // {
//   //   "char_5",
//   //   sequelize:STRING
//   // }
// )
return queryInterface.addColumn(
  'Users',
  'char_1'
  {
    type: Sequelize.STRING,

  }
)  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
