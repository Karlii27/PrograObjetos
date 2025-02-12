class Coche{
    constructor(marca, modelo, anio, estado){
        this.marca= marca;
        this.modelo= modelo;
        this.anio= anio;
        this.estado= estado
       
    }
    encender(){
        if(this.estado=== true){
           console.log("El coche está encendido")
        }else{
            console.log("El coche está apagado")
        }
    }
    apagar(){
        if(this.estado === false){
            console.log("El coche está apagado")
        }else{
            console.log("El coche está encendido")
        }
           
    }
    info(){
        console.log(`Este conche es un ${this.marca} ${this.modelo} del año ${this.anio}`)
    }
}
const coche1= new Coche("Toyota", "Corolla", 2022, false)
coche1.encender()
coche1.apagar()
coche1.info()




