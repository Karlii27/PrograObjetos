class Producto {
    constructor(nombre, precio, stock) {
        this._nombre = nombre
        this._precio = precio
        this._stock = stock
    }

    agregar(cantidad) {
        if (cantidad > 0) {
            this._stock += cantidad
            console.log(`Se agregaron ${cantidad} unidades de ${this._nombre}. Stock actual: ${this._stock}`)
        } else {
            console.log("La cantidad a agregar debe ser mayor que 0.");
        }
    }

    vender(cantidad) {
        if (cantidad > 0 && cantidad <= this._stock) {
            this._stock -= cantidad;
            console.log(`Se vendieron ${cantidad} unidades de ${this._nombre}. Stock actual: ${this._stock}`)
        } else if (cantidad > this._stock) {
            console.log(`No hay suficiente stock de ${this._nombre}. Stock disponible: ${this._stock}`)
        } else {
            console.log("La cantidad a vender debe ser mayor que 0.");
        }
    }
    mostrar() {
        console.log(`Producto: ${this._nombre}  Precio: $${this._precio}  Stock: ${this._stock}`)
    }
}

const producto1 = new Producto("Laptop", 1200, 10);

producto1.mostrar()
producto1.agregar(5)   
producto1.vender(3)     
producto1.vender(15)       
producto1.mostrar()