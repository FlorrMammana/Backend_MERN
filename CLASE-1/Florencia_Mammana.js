class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    //retorna nombre completo
    getFullName(){
        return console.log(`${this.nombre}` + " " + `${this.apellido}`)   
    }
    //agrega mascotas a la clase
    addMascota(nombre){
        this.mascotas.push(nombre)
    }
    //cuenta la cantidad de mascotas que tenemos
    countMascotas(){
        let conteo = this.mascotas.length
        return console.log(conteo);
    }
    //agrega nombre y autor de libro
    addBook(name, author){      
        this.libros.push({name, author})
    }
    //retorna solo el nombre del libro
    getBookNames(){
        let nombreLibros = this.libros.map(libro => libro.name)
        return console.log(nombreLibros)
    }
}

const usuario = new Usuario("Florencia", "Mammana", [], [])
usuario.addMascota("marta")
usuario.addMascota("Luis")
usuario.addMascota("Juan")
usuario.addBook('it','sthephen king')
usuario.addBook('el resplandor', 'sthepen king')

console.log(usuario)