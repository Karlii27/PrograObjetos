class Inventario {
    constructor(producto, precio, cantidad) {
        this._producto = producto;
        this.precio = precio; 
        this.cantidad = cantidad; 
    }

    get producto() {
        return this._producto;
    }
    set producto(nuevoProducto) {
        if (typeof nuevoProducto === "string" && nuevoProducto.trim() !== "") {
            this._producto = nuevoProducto;
        } else {
            console.log("Error: El nombre del producto no es válido.");
        }
    }

    get precio() {
        return this._precio;
    }
    set precio(nuevoPrecio) {
        if (typeof nuevoPrecio === "number" && nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        } else {
            console.log("Error: El precio no puede ser negativo.");
        }
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(nuevaCantidad) {
        if (Number.isInteger(nuevaCantidad) && nuevaCantidad >= 0) {
            this._cantidad = nuevaCantidad;
        } else {
            console.log("Error: La cantidad debe ser un número entero positivo.");
        }
    }

    agregarStock(nuevaCantidad) {
        if (Number.isInteger(nuevaCantidad) && nuevaCantidad > 0) {
            this._cantidad += nuevaCantidad;
            console.log(`Se han agregado ${nuevaCantidad} unidades. Nuevo stock: ${this._cantidad}`);
        } else {
            console.log("Error: La cantidad a agregar debe ser mayor a 0.");
        }
    }

    comprar(cantidadCompra) {
        if (!Number.isInteger(cantidadCompra) || cantidadCompra <= 0) {
            console.log("Error: La cantidad a comprar debe ser un número positivo.");
            return;
        }

        if (cantidadCompra > this._cantidad) {
            console.log(`Error: No contamos con la cantidad pedida. Stock disponible: ${this._cantidad}`);
            return;
        }

        this._cantidad -= cantidadCompra;
        console.log(`Se ha comprado ${cantidadCompra} unidades. Stock restante: ${this._cantidad}`);
    }

    mostrarInformacion() {
        console.log(`Producto: ${this._producto}`);
        console.log(`Precio: $${this._precio.toFixed(2)}`);
        console.log(`Stock disponible: ${this._cantidad} unidades`);
    }
}

let producto1 = new Inventario("Televisor", 500, 3);
producto1.mostrarInformacion();

producto1.agregarStock(1);
producto1.mostrarInformacion();

producto1.comprar(9);
producto1.mostrarInformacion();
