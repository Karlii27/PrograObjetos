class Empleado {
    #sueldo;
    constructor(nombre, puesto, sueldo) {
      this.nombre = nombre;
      this.puesto = puesto;
      this.#sueldo = sueldo;
    }
  
    getSueldo() {
      return this.#sueldo;
    }
  
    setSueldo(nuevoSueldo) {
      if (nuevoSueldo > 0) {
        this.#sueldo = nuevoSueldo;
      } else {
        console.log("El sueldo debe ser positivo.");
      }
    }
  
    mostrarInfo() {
      console.log(`Empleado: ${this.nombre}, Puesto: ${this.puesto}, Sueldo: ${this.#sueldo}`);
    }
  }
  
  // Pruebas
  const empleado = new Empleado("Karla Morales", "Desarrolladora", 2300);
  empleado.mostrarInfo();
  empleado.setSueldo(2500);
  empleado.mostrarInfo();
  empleado.setSueldo(-400); // Error
  