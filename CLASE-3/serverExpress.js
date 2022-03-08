const express = require('express');
const app = express();

const PORT = 8080
const server = app.listen(PORT, () => {
 console.log(`Servidor http escuchando en el puerto http://localhost:8080`)
})

app.get("/productos", (req, res) => {
  res.json('productos.json');
});

app.get("/productoRandom", (req, res) => {
  res.json('productos.json');
});
//server.on("error", error => console.log(`Error en servidor ${error}`))