const Autenticacion = {
    login(usuario){
        console.log(`${usuario} inició sesión`);
    }
};

const Notificacion = {
    enviarNotificacion(mensaje){
        console.log(`Notificación: ${mensaje}`);
    }
};

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Autenticacion, Notificacion);

const user1 = new Usuario("Karla Morales");
user1.login(user1.nombre);
user1.enviarNotificacion("Tienes 3 notificaciones");