const { DataTypes } = require("sequelize");
const db = require("../db");

const Mascota = db.define("Mascota", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  especie: { type: DataTypes.STRING }, 
});

module.exports = Mascota;
