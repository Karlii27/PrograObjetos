class Animal{
    #name;//Atributo privado
    _raza; //Atributo protegido
    color; //Atributo público
    constructor(name, raza, color){
        this.#name= name
        this._raza= raza
        this.color= color
    }
    getName(){
        return this.#name
    }
}

module.exports = Animal