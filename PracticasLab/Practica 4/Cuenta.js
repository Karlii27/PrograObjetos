class CuentaBancaria{
    constructor(numeroCuenta, titular, saldo=0, estado){
        this._numeroCuenta= numeroCuenta
        this._titular= titular
        this._saldo= saldo
        this._estado= estado

    }
    get numeroCuenta(){
        return this._numeroCuenta
    }
    set numeroCuenta(numeroCuenta){
        this._numeroCuenta= numeroCuenta
    }
    get titular(){
        return this._titular
    }
    set titular(titular){
        this._titular= titular
    }
    get saldo(){
        return this._saldo
    }
    set saldo(saldo){
        this._saldo=saldo
    }
    get estado(){
        return this._estado
    }
    set estado(estado){
        this._estado= estado
    }

    depositar(nuevoMonto){
        if(this._estado === true && nuevoMonto >0 ){
            this._saldo+=nuevoMonto
            console.log(`$${nuevoMonto} dólares han sido agregados a su cuenta. Saldo Total: $${this._saldo.toFixed(2)}`)
        }else{
            console.log("Error: Su cuenta está inactiva o el monto es inválido")
        }
    }

    retirar(retiro){
        if(this._estado === true  && retiro > 0 && this._saldo >= retiro){
            this._saldo-= retiro
            console.log(`$${retiro} dólares han sido retirados de su cuenta. Saldo Total: $${this._saldo.toFixed(2)}`) 
        }else{
            console.log("Error: Su cuenta está inactiva o no hay suficiente saldo en su cuenta")
        }
    }

    mostrarInfo(){
        console.log(`Numero de cuenta: ${this._numeroCuenta}`)
        console.log(`Titular: ${this._titular}`)
        console.log(`Saldo: ${this._saldo.toFixed(2)}`)
        console.log(`Estado de la cuenta: ${this._estado ? "Activa": "Inactiva"}`)
    }
}

const cliente1= new CuentaBancaria("123456", "Karla Medrano", 100, true)
cliente1.depositar(200)
cliente1.mostrarInfo()
cliente1.retirar(150)
