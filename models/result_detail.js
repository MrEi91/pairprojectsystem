'use strict';
module.exports = function(sequelize, DataTypes) {
  var Result_detail = sequelize.define('Result_detail', {
    person1_ID: DataTypes.INTEGER,
    person2_ID: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    reason: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Result_detail.belongsTo()
      }
    }
  });
  return Result_detail;
};
