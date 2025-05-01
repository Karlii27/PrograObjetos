class Tienda{
    constructor(){
        this.inventario=[]
        this.clientes=[]
    }

    agregarProducto(producto){
        this.inventario.push(producto)
    }

    rgistrarCliente(cliente){
        this.clientes.push(cliente)
    }

    venderProducto(cliente, producto){
        console.log(`Vendido ${producto} a ${cliente}`)
        //Lógica mezclada en una sola clase
    }

    enviarEmail(cliente, mensaje){
        console.log(`Enviando correo a ${cliente}: ${mensaje}`)
    }
}

const tienda= new Tienda()
tienda.agregarProducto("Camisa")
tienda.rgistrarCliente("Ana")
tienda.venderProducto("Ana", "Camisa")
tienda.enviarEmail("Ana", "Gracias por su compra")

//Es mala practica ya que una sola clase hace demasiadas cosas y no hay dependencia entre los metododos