'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  Users.associate = function (models) {
    Users.hasMany(models.User_connections, {
      foreignKey: 'user_id'
    });
  };
  return Users;
};