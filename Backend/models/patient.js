"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init(
    {
      nama_lengkap: DataTypes.STRING,
      alamat: DataTypes.STRING,
      jenis_kelamin: DataTypes.STRING,
      tanggal_lahir: DataTypes.DATE,
      pendidikan: DataTypes.STRING,
      pekerjaan: DataTypes.STRING,
      agama: DataTypes.STRING,
      no_telp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Patient",
    }
  );
  return Patient;
};
