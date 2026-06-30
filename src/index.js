const express = require('express');
const path = require('node:path');
// Configurar el servidor

// Variable que representa el servidor

const server = express();

// Arrancamos el server

const port = 4000;
server.listen(port, () => {
  console.log(`El servidor se ha iniciado en <http://localhost:${port}/>`);
});

// Configurar endpoints = rutas?

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

server.use(express.static(path.join(__dirname, '..', 'public')));
