class Vehiculo {
    constructor(marca, modelo, anio, kilometraje, disponible = true) {
        this._marca = marca;
        this._modelo = modelo;
        this.anio = anio;
        this.kilometraje = kilometraje;
        this._disponible = disponible;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(modelo) {
        this._modelo = modelo;
    }

    get anio() {
        return this._anio;
    }

    set anio(anio) {
        if (typeof anio === 'number' && anio > 1900) {
            this._anio = anio;
        } else {
            console.log(`Error: El año de fabricación (${anio}) es inválido. Debe ser mayor que 1900.`);
        }
    }

    get kilometraje() {
        return this._kilometraje;
    }

    set kilometraje(kilometraje) {
        if (typeof kilometraje === 'number' && kilometraje >= 0) {
            this._kilometraje = kilometraje;
        } else {
            console.log(`Error: El kilometraje (${kilometraje}) es inválido. No puede ser negativo.`);
        }
    }

    get disponible() {
        return this._disponible;
    }

    set disponible(disponible) {
        this._disponible = disponible;
    }

    aumentarKilometraje(kilometros) {
        if (typeof kilometros === 'number' && kilometros > 0) {
            this._kilometraje += kilometros;
            console.log(`Kilometraje aumentado a: ${this._kilometraje}`);
        } else {
            console.log(`Error: Los kilómetros (${kilometros}) son inválidos. Deben ser mayores que 0.`);
        }
    }

    cambiarDisponibilidad() {
        this._disponible = !this._disponible;
        console.log(`Disponibilidad cambiada a: ${this._disponible ? "Disponible" : "No disponible"}`);
    }

    mostrarInformacion() {
        console.log(`Marca: ${this._marca}`);
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Año: ${this._anio}`);
        console.log(`Kilometraje: ${this._kilometraje}`);
        console.log(`Disponible: ${this._disponible ? "Sí" : "No"}`);
    }
}

const vehiculo1 = new Vehiculo("Toyota", "Corolla", 2020, 15000, true);

vehiculo1.mostrarInformacion();
vehiculo1.aumentarKilometraje(500);
vehiculo1.cambiarDisponibilidad();
vehiculo1.mostrarInformacion();

vehiculo1.anio = 1800;
vehiculo1.kilometraje = -100;
vehiculo1.aumentarKilometraje(-50);