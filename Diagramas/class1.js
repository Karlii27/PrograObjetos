class Libro{
    constructor(titulo, autor, anioPublicacion){
        this._titulo= titulo
        this._autor= autor
        this._publicacion= anioPublicacion
    }
}

class Biblioteca{
    constructor(){
        this.listBooks=[]
    }

    agregarLibro(libro){
        this.listBooks.push(libro)

    }

    buscarLibro(titulo){
        return this.listBooks.find(libro => libro._titulo === titulo)
    }

    mostrar(){
        this.listBooks.forEach(libro=>{
            console.log(`Libro: ${libro._titulo} - Autor: ${libro._autor} - Año de su publicación: ${libro._publicacion}`)
        })
    }
}

const persona1= new Biblioteca();
persona1.agregarLibro(new Libro("El Quijote", "Cervantes", 1605))
persona1.agregarLibro(new Libro("Cien años de soledad", "García Márquez", 1967))
persona1.mostrar()
console.log(persona1.buscarLibro("Cien años de soledad"))