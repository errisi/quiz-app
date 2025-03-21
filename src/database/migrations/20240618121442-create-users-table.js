"use strict";

const TABLE_NAME = "users";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      tgId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      balance: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: Sequelize.literal("'0'::double precision"),
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
    queryInterface.dropTable(TABLE_NAME);
  },
};
