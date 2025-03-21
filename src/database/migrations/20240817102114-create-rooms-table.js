"use strict";

const TABLE_NAME = "rooms";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      firstPlayerId: {
        type: Sequelize.STRING,
      },
      secondPlayerId: {
        type: Sequelize.STRING,
      },
      firstPlayerScore: {
        type: Sequelize.INTEGER,
      },
      secondPlayerScore: {
        type: Sequelize.INTEGER,
      },
      isBot: {
        type: Sequelize.BOOLEAN,
      },
      winnerId: {
        type: Sequelize.STRING,
      },
      bet: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME);
  },
};
