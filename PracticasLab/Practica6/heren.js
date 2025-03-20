const Comunicacion = {
    enviarMensaje(mensaje){
        console.log(`${this.nombre} envió: ${mensaje}`)
    }
};

const Registro = {
    registraAccion(accion){
        console.log(`${this.nombre} realizó: ${accion}`)
    }
};

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
};

Object.assign(Usuario.prototype, Comunicacion, Registro);

const usuario1 = new Usuario("Karli")
usuario1.registraAccion("Inicio de sesión")
usuario1.enviarMensaje("Hola. ¿Qué tal?")
