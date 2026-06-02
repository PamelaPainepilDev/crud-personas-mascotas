const Persona = require("./Persona");
const Mascota = require("./Mascota");

// Una Persona tiene muchas Mascotas
Persona.hasMany(Mascota);
Mascota.belongsTo(Persona);

module.exports = { Persona, Mascota };
