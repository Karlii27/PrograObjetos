// Ejemplo de propiedad privada
class CuentaBancaria{
    #saldo;
    constructor(nombre, saldoInicial){
        this.nombre = nombre;
        this.#saldo = saldoInicial; // propiedad privada
    }
    depositar(monto){
        if(monto > 0){
            this.#saldo += monto;
            console.log(`Deposito exitoso. Nuevo saldo: ${this.#saldo}`)
        } else {
            console.log(`Error el monto debe ser mayor a 0`);
        }
    }
    
obtenerSaldo(){
    return `Saldo disponible ${this.#saldo}`;
}
}

const cuenta1 = new CuentaBancaria("Karla", 2000);
console.log(cuenta1.obtenerSaldo());
cuenta1.depositar(800);
console.log(cuenta1.obtenerSaldo());