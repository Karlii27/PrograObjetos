class Producto {
    #precio;
    constructor(nombre, precio, edad) {
      this.nombre = nombre;
      this.#precio = precio;
    }
  
    // Getter para obtener el precio
    get precio() {
      return this.#precio;
    }
  
    // Setter para validar el nuevo precio
    set precio(nuevoPrecio) {
      if (nuevoPrecio > 0) {
        this.#precio = nuevoPrecio;
      } else {
        console.log("El precio debe ser mayor a 0");
      }
    }
  }
  
  const libro = new Producto("Libro de JS", 25);
  console.log(libro.precio); // 25
  libro.precio = 30; // Actualiza el precio
  console.log(libro.precio); // 30
  libro.precio = -10; // Error: El precio debe ser mayor a 0
  