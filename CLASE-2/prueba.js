class Contenedor{
    constructor(archivo, data){
        this.archivo = archivo;
        this.data = data;
        
    }
    //guarda datos, debe retornar el numero de id nuevo
    async save(){
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
        //parse convierte JSON to objec     

         
    }
    //devuelve el elemento solicitado o null si no esta OK
    async getById(id) {
      let fs = require('fs')
      try{
        let datos = JSON.parse(await fs.promises.readFile(this.archivo, 'utf-8'))        
        let ver = datos.find(producto => producto.id == id)
        if(ver){
          console.log(ver)
        }else{
          console.log(null)
        }
      }
      catch(err){
        console.log(null)
      }
    }
    //trae todos los elementos
    async getAll() {
        let fs = require('fs')
        try {     
            let todo = await fs.promises.readFile(this.archivo, 'utf-8')
            console.log(todo);
        }
          catch (err) { 
            console.log(null);
       }      
    }
    //borra el elemento con el id
    async deleteById(id){
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
    }
    //borra todos los elementos(archivo)
    async deleteAll(){
        let fs = require('fs')
        await fs.promises.unlink(this.archivo)
    }

}

let flor = new Contenedor('productos.json', {
  title:"juan",
  price:1,
  thumbnail:"none",
} )

flor.save()
//flor.getAll()
//flor.getById(1)
//flor.deleteById(1)
//flor.deleteAll()