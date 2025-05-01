// Clase para manejar inventario
class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerProductos() {
        return this.productos;
    }
}

// Clase para representar a un cliente
class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

// Clase para enviar notificaciones
class Notificador {
    enviarCorreo(cliente, mensaje) {
        console.log(`Enviando correo a ${cliente.email}: ${mensaje}`);
    }
}

// Clase para gestionar ventas
class Tienda {
    constructor(inventario, notificador) {
        this.inventario = inventario;
        this.notificador = notificador;
    }

    venderProducto(cliente, producto) {
        const index = this.inventario.productos.indexOf(producto);
        if (index !== -1) {
            this.inventario.productos.splice(index, 1);
            console.log(`Producto vendido: ${producto}`);
            this.notificador.enviarCorreo(cliente, `Gracias por comprar ${producto}`);
        } else {
            console.log(`Producto no disponible: ${producto}`);
        }
    }
}
const inventario = new Inventario();
inventario.agregarProducto("Laptop");

const cliente = new Cliente("Ana", "ana@email.com");
const notificador = new Notificador();
const tienda = new Tienda(inventario, notificador);

tienda.venderProducto(cliente, "Laptop");


//cada clase tiene su función