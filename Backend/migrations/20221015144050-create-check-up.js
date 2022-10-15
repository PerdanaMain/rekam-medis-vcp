"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CheckUps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tanggal_pemeriksaan: {
        type: Sequelize.DATE,
      },
      tensi: {
        type: Sequelize.STRING,
      },
      poli: {
        type: Sequelize.STRING,
      },
      nama_dokter: {
        type: Sequelize.STRING,
      },
      catatan_pengobatan: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CheckUps");
  },
};
