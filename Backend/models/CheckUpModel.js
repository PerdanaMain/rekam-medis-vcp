import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const CheckUp = db.define(
  "pemeriksaan",
  {
    tanggal_pemeriksaan: DataTypes.DATE,
    tensi: DataTypes.STRING,
    poli: DataTypes.STRING,
    nama_dokter: DataTypes.DATE,
    catatan_pengobatan: DataTypes.STRING,
    penunjang: DataTypes.STRING,
    tindakan: DataTypes.STRING,
    resep: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default CheckUp;

(async () => {
  await db.sync();
})();
