# CRUD Personas + Mascotas (1:N)

Ejemplo mínimo de relación **Uno a Muchos** con Sequelize.
Una persona puede tener muchas mascotas.

## Pasos

```bash
npm install
cp .env.example .env       # ajusta tus credenciales de postgres
node index.js              # http://localhost:3000
```

## Modelos

- **Persona**: nombre, edad, email
- **Mascota**: nombre, especie, `PersonaId` (FK, la crea Sequelize)

La relación se declara en `models/index.js`:

```js
Persona.hasMany(Mascota);
Mascota.belongsTo(Persona);
```

## Endpoints

### Personas
- `POST /personas` — crear
- `GET /personas` — listar (cada persona viene con sus mascotas anidadas)
- `GET /personas/:id` — obtener una con sus mascotas
- `PUT /personas/:id` — actualizar
- `DELETE /personas/:id` — eliminar

### Mascotas
- `POST /mascotas` — crear (body: `nombre`, `especie`, `PersonaId`)
- `GET /mascotas` — listar todas
- `DELETE /mascotas/:id` — eliminar

## Cómo demostrarlo en clase

```bash
# 1. Crear una persona
POST /personas
{ "nombre": "Ana", "edad": 30, "email": "ana@mail.com" }

# 2. Crearle 2 mascotas usando su id
POST /mascotas
{ "nombre": "Firulais", "especie": "perro", "PersonaId": 1 }

POST /mascotas
{ "nombre": "Michi", "especie": "gato", "PersonaId": 1 }

# 3. Ver a Ana con sus 2 mascotas en una sola consulta
GET /personas/1
```

## Autora
Pamela Painepil

## URL del repositorio
