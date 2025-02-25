const Animal = require('./encapsulamiento')

class Perro extends Animal{
    constructor(name, raza, color){
        super(name, raza, color)
    }
    getName(){
        return super.getName()
    }
}

let animal= new Perro('Perro', 'Pastor Aleman', 'Negro')
console.log(animal.getName())