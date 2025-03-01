class Cuenta{
    constructor(numero, titular, saldo=0){
        this._numero= numero
        this._titular= titular
        this._saldo= saldo
    }

    depositar(cantidad){
        if(cantidad>0){
            this._saldo=+cantidad
            console.log(`Su depósito de $${cantidad} ha sido realizado. Saldo depositado: $${this._saldo}`)
        }else{
            console.log("El depósito debe ser mayor a 0")
        }
    }
    retirar(cantidad){
        if(cantidad <= this._saldo && cantidad >0){
            this._saldo-= cantidad
            console.log(`Retiro de $${cantidad} realizado. Nuevo saldo: $${this._saldo}`)
        }else if(cantidad > this._saldo){
            console.log("Fondos insuficientes para su retiro")
        }else{
            console.log("El retiro debe ser mayor a 0")
        }
    }

    consultar(){
        console.log(`El saldo de la cuenta: ${this._numero} es de: $${this._saldo}`)
    }
}

const persona1 = new Cuenta("123456", "Karla Morales", 200)
persona1.retirar(150)
persona1.consultar()
persona1.depositar(1200)