'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    character: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // User.hasMany(Result_detail, {as:'id'})
      }
    }
  });
  return User;
};
