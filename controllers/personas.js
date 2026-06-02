const { Persona, Mascota } = require("../models");

async function crear(req, res) {
  try {
    const persona = await Persona.create(req.body);
    res.status(201).json(persona);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function listar(req, res) {
  // Trae cada persona con sus mascotas en una sola consulta
  const personas = await Persona.findAll({ include: Mascota });
  res.json(personas);
}

async function obtener(req, res) {
  const persona = await Persona.findByPk(req.params.id, { include: Mascota });
  if (!persona) return res.status(404).json({ error: "Persona no encontrada" });
  res.json(persona);
}

async function editar(req, res) {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ error: "Persona no encontrada" });
    await persona.update(req.body);
    res.json(persona);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function eliminar(req, res) {
  const persona = await Persona.findByPk(req.params.id);
  if (!persona) return res.status(404).json({ error: "Persona no encontrada" });
  await persona.destroy();
  res.json({ mensaje: "Persona eliminada" });
}

module.exports = { crear, listar, obtener, editar, eliminar };
