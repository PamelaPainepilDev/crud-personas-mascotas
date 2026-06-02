// routes/personas.js — Define las rutas REST del recurso /personas
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/personas");

router.post("/", ctrl.crear);          // CREATE
router.get("/", ctrl.listar);          // READ all
router.get("/:id", ctrl.obtener);      // READ one
router.put("/:id", ctrl.editar);       // UPDATE
router.delete("/:id", ctrl.eliminar);  // DELETE

module.exports = router;
