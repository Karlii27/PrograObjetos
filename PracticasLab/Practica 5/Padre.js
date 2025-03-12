class Padre{
    _nombre
    _edad
    constructor(nombre, edad){
        this._nombre= nombre
        this._edad= edad
    }

    saludar(){
        console.log(`Hola ${this._nombre} con la edad de ${this._edad}!`)
    }
    
}
module.exports= Padre