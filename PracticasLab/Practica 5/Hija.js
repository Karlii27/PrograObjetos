const Padre = require ('./Padre')

class Hija extends Padre{
    constructor(nombre, edad, hermanos){
        super(nombre, edad)
        this._hermanos= hermanos

    }
    saludar(){
        console.log(`Hola ${this._nombre} y eres una clase hija`)
    }
    presentarBrothers(){
        console.log(`Tus hermanos son: ${this._hermanos.join(', ')} `)
    }
}

const hija= new Hija("Karla", 19, ['Rebeca', 'Juanita'])
hija.saludar()
hija.presentarBrothers()