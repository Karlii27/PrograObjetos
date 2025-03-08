class Estudiante{
    constructor(nombre, edad, promedio, estado){
        this._nombre= nombre
        this._edad= edad
        this._promedio= promedio
        this._estado= estado
    }

    get nombre(){
        return this._nombre
    }
    get edad(){
        return this._edad
    }
    get promedio(){
        return this._promedio
    }
    get estado(){
        return this._estado
    }
    set nombre(nombre){
        this._nombre= nombre
    }
    set edad(edad) {
        if (typeof edad === 'number' && edad > 0) {
            this._edad = edad;
        } else {
            console.log(`Error: La edad del estudiante ${this._nombre} es inválida. Debe ser mayor que 0.`)
        }
    }
    set promedio(promedio) {
        if (typeof promedio === 'number' && promedio >= 0 && promedio <= 10) { 
            this._promedio = promedio;
        } else {
            console.log(`Error: El promedio del estudiante ${this._nombre} es inválido. Debe estar entre 0 y 10.`)
        }
    }
    set estado(estado){
        this._estado= estado
    }

    actualizarPromedio(nuevaCalificacion) {
        if (typeof nuevaCalificacion === 'number' && nuevaCalificacion >= 0 && nuevaCalificacion <= 10) {
            this._promedio = (this._promedio + nuevaCalificacion) / 2;
            console.log(`Promedio actualizado: ${this._promedio.toFixed(2)}`);
        } else {
            console.log(`Error: La nueva calificación es inválida. Debe estar entre 0 y 10.`)
        }
    }

    cambiarEstado() {
        this._estado = !this._estado
        console.log(`Estado del estudiante ${this._nombre} cambiado a: ${this._estado ? "Activo" : "Inactivo"}`)
    }

      mostrarInformacion() {
        console.log(`Nombre: ${this._nombre}`)
        console.log(`Edad: ${this._edad}`)
        console.log(`Promedio: ${this._promedio.toFixed(2)}`)
        console.log(`Estado: ${this._estado ? "Activo" : "Inactivo"}`)
    }
}

const estudiante1= new Estudiante("Juán Pérez", 12, 10, true)
estudiante1.mostrarInformacion()
estudiante1.actualizarPromedio(8)
estudiante1.cambiarEstado(false)