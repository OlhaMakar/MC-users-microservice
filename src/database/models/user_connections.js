'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_connections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_connections.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    bot_id: DataTypes.INTEGER,
    channel: DataTypes.STRING,
    externalId: DataTypes.STRING,
    role: DataTypes.STRING,
    iteraction_count: DataTypes.INTEGER,
    state: DataTypes.STRING,
    previous_state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_connections',
  });
  User_connections.associate = function (models) {
    User_connections.belongsTo(models.Users, {
      foreignKey: 'user_id'
    });
  };
  return User_connections;
};