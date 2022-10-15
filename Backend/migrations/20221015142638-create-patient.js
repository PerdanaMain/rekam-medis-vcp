"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Patients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_lengkap: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      jenis_kelamin: {
        type: Sequelize.STRING,
      },
      tanggal_lahir: {
        type: Sequelize.DATE,
      },
      pendidikan: {
        type: Sequelize.STRING,
      },
      pekerjaan: {
        type: Sequelize.STRING,
      },
      agama: {
        type: Sequelize.STRING,
      },
      no_telp: {
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
    await queryInterface.dropTable("Patients");
  },
};
