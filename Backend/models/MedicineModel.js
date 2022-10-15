import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Medicine = db.define(
  "obat",
  {
    nama: DataTypes.DATE,
    ketentuan: DataTypes.STRING,
    expired: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default Medicine;

(async () => {
  await db.sync();
})();
