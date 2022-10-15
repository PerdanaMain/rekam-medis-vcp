import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Patient = db.define(
  "pasien",
  {
    nama_lengkap: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    pendidikan: DataTypes.STRING,
    pekerjaan: DataTypes.STRING,
    agama: DataTypes.STRING,
    kawin: DataTypes.BOOLEAN,
    no_telp: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Patient;

(async () => {
  await db.sync();
})();
