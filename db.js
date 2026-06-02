// db.js — Conexión a PostgreSQL mediante Sequelize
require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false, // pon true si quieres ver el SQL que genera Sequelize
  }
);

module.exports = sequelize;
