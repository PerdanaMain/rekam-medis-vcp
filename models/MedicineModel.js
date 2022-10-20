import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Medicines = db.define(
  "medicines",
  {
    name: {
      type: DataTypes.STRING,
    },
    usage: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default Medicines;
