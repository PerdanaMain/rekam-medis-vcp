import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Employee = db.define(
  "pegawai",
  {
    nama: DataTypes.DATE,
    alamat: DataTypes.STRING,
    no_telp: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Employee;

(async () => {
  await db.sync();
})();
