import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Patients = db.define(
  "patients",
  {
    name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    born_date: {
      type: DataTypes.DATE,
    },
    contact: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);
export default Patients;
