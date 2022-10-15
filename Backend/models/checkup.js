"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CheckUp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CheckUp.init(
    {
      tanggal_pemeriksaan: DataTypes.DATE,
      tensi: DataTypes.STRING,
      poli: DataTypes.STRING,
      nama_dokter: DataTypes.STRING,
      catatan_pengobatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CheckUp",
    }
  );
  return CheckUp;
};
