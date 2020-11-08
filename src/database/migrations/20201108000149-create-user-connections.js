'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_connections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      name: {
        type: Sequelize.STRING
      },
      bot_id: {
        type: Sequelize.INTEGER
      },
      channel: {
        type: Sequelize.STRING
      },
      externalId: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      iteraction_count: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.STRING
      },
      previous_state: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('User_connections');
  }
};