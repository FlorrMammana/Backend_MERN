const express = require('express');
const multer = require('multer');
const data = require("./productos.json") //productos

const app = express();

const PORT = 8080 //puerto

//app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//MULTER
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
    filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
 });  

 const upload = multer({ storage })

 app.post('/uploadfile', upload.single(data), (req, res, next) => {
  const file = req.file
  
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
 })

app.listen(PORT, () => {
 console.log(`Servidor http escuchando en el puerto http://localhost:8080`)
 console.log(`http://localhost:8080/productos`)
 console.log(`http://localhost:8080/productoRandom`)
})
//Todos los productos
app.get('/api/productos', (req, res) => {
  res.json(data);
});

//id
app.get('/api/productos/:id', (req, res) => {
  let ver = data.find(producto => producto.id === id);
  res.json(ver);
});
//recibe y agrega un producto y devuelve su id
app.post('/api/productos'), (req, res) => {
  let fs = require('fs')
  let datos = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'))
  let ids = datos.map(element=> element.id)
  let id = Math.max(...ids) + 1
  this.data.id = id
  console.log(id)
  await fs.promises.appendFile(this.archivo, JSON.stringify([this.data], null, 2), function (err) {
  if (err) throw err;
  console.log(err);
  });
}
//recibe y actualiza un producto segun su id
app.put('/api/productos/:id'), (req, res) =>{
    let productos = []; 
    let product = fs.readFile(json.stringify(data), 'utf-8', (error, contenido)  => {
        if (error) {
            res('No existen Productos.')
            return true;
        } else {      
            for(let i of product){
                if (i.id == id){                  
                    i.title = titulo;
                    i.price = precio;
                    i.thumbnail = thumbnail;
                }
            }                                         
        }
    });
    res.json(productos)
}

app.delete('/api/productos/:id'), (req, res) => {
  let fs = require('fs')
      try{
        let datos = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'))        
        let ver = datos.find(producto => producto.id == id)

        if(ver){
          datos.splice(datos.indexOf(ver), 1)
          await fs.promises.writeFile(this.archivo, JSON.stringify(datos))
        }else{
          console.log(null)
        }
      }
      catch(err){
        console.log(null)
      }
      res.json(ver)
}
//server.on("error", error => console.log(`Error en servidor ${error}`))