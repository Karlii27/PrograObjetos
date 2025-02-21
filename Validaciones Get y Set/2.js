class Persona {
    constructor(nombre, fechaNacimiento) {
        this._nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(nuevaFecha) {
        let fecha = new Date(nuevaFecha);
        if (isNaN(fecha.getTime())) {
            console.log("Error: La fecha ingresada no es válida.");
            this._fechaNacimiento = undefined;
            return;
        }

        let fechaActual = new Date();
        if (fecha > fechaActual) {
            console.log("Error: La fecha de nacimiento no puede ser futura.");
            this._fechaNacimiento = undefined;
            return;
        }
        this._fechaNacimiento = fecha;
    }

    get edad() {
        if (!this._fechaNacimiento) {
            return "Edad no disponible, fecha incorrecta.";
        }

        let fechaActual = new Date();
        let edad = fechaActual.getFullYear() - this._fechaNacimiento.getFullYear();

        let mesActual = fechaActual.getMonth();
        let diaActual = fechaActual.getDate();
        let mesNacimiento = this._fechaNacimiento.getMonth();
        let diaNacimiento = this._fechaNacimiento.getDate();

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }
        return edad;
    }

    mostrarInformacion() {
        if (!this._fechaNacimiento) {
            console.log(`Nombre: ${this._nombre}`);
            console.log("La fecha es inválida.");
        } else {
            console.log(`Nombre: ${this._nombre}`);
            console.log(`Fecha de Nacimiento: ${this._fechaNacimiento.toISOString().split('T')[0]}`); //YYYY-MM-DD
            console.log(`Edad: ${this.edad} años`);
        }
    }
}

let persona1 = new Persona("Flavia Valencia", "2000-12-15");
persona1.mostrarInformacion();

let persona2 = new Persona("Keyri Sanchez", "2025-01-07"); 
persona2.mostrarInformacion()

let persona3 = new Persona("Emely Muñoz", "dosmilveinte-agosto-diez"); 
persona3.mostrarInformacion();
