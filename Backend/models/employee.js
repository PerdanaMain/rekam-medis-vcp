"use strict";
const { Model } = require("sequelize");
const { CheckUp } = require("./checkup");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
    }
  }
  Employee.init(
    {
      nama: DataTypes.STRING,
      alamat: DataTypes.STRING,
      no_telp: DataTypes.STRING,
      role: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
