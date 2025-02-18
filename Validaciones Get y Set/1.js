class Persona {
    constructor(id, nombre, telefono, genero, departamento) {
        this._id = id;
        this._nombre = nombre;
        this._telefono = telefono;
        this._genero = genero;
        this._departamento = departamento;
    }
    get id() {
        return this._id;
    }
    set id(nuevoId) {
        this._id = nuevoId;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        const validarCadena= /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
        if(validarCadena.test(nuevoNombre) && nuevoNombre.length > 5 && nuevoNombre.length <=20){
            this._nombre = nuevoNombre;
        }else{
            console.log("El nombre que usted ha ingresado no cumple con lo permitido (20 caracteres y solo letras)")
        }
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(validarTelefono) {
        if(validarTelefono.length === 8 && !isNaN(validarTelefono)){
            this._telefono = validarTelefono;
        }else{
            console.log("El número de teléfono debe contener 8 dígitos y ser númerico")
        }
        
    }
    get genero() {
        return this._genero;
    }
    set genero(nuevoGenero) {
        this._genero = nuevoGenero;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(nuevoDepartamento) {
        this._departamento = nuevoDepartamento;
    }
    mostrarInformacion() {
        console.log(`ID: ${this._id}`);
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Teléfono: ${this._telefono}`);
        console.log(`Género: ${this._genero}`);
        console.log(`Departamento: ${this._departamento}`);
    }
}
const persona1 = new Persona(1, "Juan Pérez", "123456789", "Masculino", "Ventas");
persona1.mostrarInformacion();
persona1.id = 2;
persona1.nombre = "Ana Silvia Gómez";
persona1.telefono = "98765432";
persona1.genero = "Femenino";
persona1.departamento = "Recursos Humanos";
persona1.mostrarInformacion();
