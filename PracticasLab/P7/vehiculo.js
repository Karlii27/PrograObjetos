//Clase base
class Vehiculo{
    moverse(){
        throw new Error("Este metodo debe ser implementado por las subclases o clases hijas")
    }
}
 //Clases Hijas
 class Coche extends Vehiculo{
    constructor(marca, color){
        super()
        this.marca= marca
        this.color= color
    }
    //Polimorfismo
    moverse(){
        return `El Coche ${this.marca} de color ${this.color} se está moviendo`
    }
 }

 class Bicicleta extends Vehiculo{
    constructor(marca, color){
        super()
        this.marca= marca
        this.color= color
    }
    moverse(){
         return `La Bici ${this.marca} de color ${this.color} se está moviendo`
    }
 }

  class Avion extends Vehiculo{
    constructor(marca, aerolinea){
        super()
        this.marca= marca
        this.aerolinea= aerolinea
    }
    moverse(){
        return `El avión ${this.marca} de la aerolinea ${this.aerolinea} se está moviendo`
    }
  }

function Vehi(move){
    move.forEach(mover=>{
        console.log(`${mover.constructor.name}: ${mover.moverse()}`)
    })
}

//Instancia de las figuras
const move=[
    new Coche("Toyota", "Rojo"),
    new Bicicleta("BMC", "Negra"),
    new Avion("Embraer", "Volatil")
]

Vehi(move)