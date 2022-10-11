import { Sequelize } from "sequelize";

const db = new Sequelize("rekam_medis_vcp", "root", "firman2307", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
