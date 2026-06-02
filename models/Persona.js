const { DataTypes } = require("sequelize");
const db = require("../db");

const Persona = db.define("Persona", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    validate: { min: 0 },
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: { isEmail: true },
  },
});
// Sequelize agrega automáticamente: id, createdAt, updatedAt

module.exports = Persona;
