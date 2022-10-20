import { Sequelize } from "sequelize";

const db = new Sequelize("O8H4VplOfn", "O8H4VplOfn", "PZby7F7rZR", {
  host: "remotemysql.com",
  dialect: "mysql",
});

export default db;
