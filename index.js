// index.js
require("dotenv").config();
const express = require("express");
const sequelize = require("./db");

// Carga modelos + asociaciones
require("./models");

const personasRoutes = require("./routes/personas");
const mascotasRoutes = require("./routes/mascotas");

const app = express();
app.use(express.json());

app.use("/personas", personasRoutes);
app.use("/mascotas", mascotasRoutes);

const PORT = process.env.PORT || 3000;

async function iniciar() {
  try {
    await sequelize.authenticate();
    console.log("✓ Conexión OK");
    await sequelize.sync({ alter: true });
    console.log("✓ Tablas listas");
    app.listen(PORT, () => console.log(`✓ http://localhost:${PORT}`));
  } catch (err) {
    console.error("✗ Error:", err.message);
  }
}

iniciar();
