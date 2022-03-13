const express = require('express');
const data = require("./productos.json")
const app = express();

//puerto
const PORT = 8080

app.listen(PORT, () => {
 console.log(`Servidor http escuchando en el puerto http://localhost:8080`)
 console.log(`http://localhost:8080/productos`)
 console.log(`http://localhost:8080/productoRandom`)
})
//Todos los productos
app.get("/productos", (req, res) => {
  res.json(data);
});

//producto random
app.get("/productoRandom", (req, res) => {

  res.json(data[Math.floor(Math.random()*data.length)]);
});

server.on("error", error => console.log(`Error en servidor ${error}`))