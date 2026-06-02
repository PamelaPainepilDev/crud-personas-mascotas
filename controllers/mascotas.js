const { Mascota } = require("../models");

async function crear(req, res) {
  try {
    // req.body debe traer: nombre, especie, PersonaId
    const mascota = await Mascota.create(req.body);
    res.status(201).json(mascota);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function listar(req, res) {
  const mascotas = await Mascota.findAll();
  res.json(mascotas);
}

async function eliminar(req, res) {
  const mascota = await Mascota.findByPk(req.params.id);
  if (!mascota) return res.status(404).json({ error: "Mascota no encontrada" });
  await mascota.destroy();
  res.json({ mensaje: "Mascota eliminada" });
}

module.exports = { crear, listar, eliminar };
