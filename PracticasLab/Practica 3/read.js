const readline = require("readline")

class Empleado {
    constructor(nombre, puesto, salario) {
        this._nombre = nombre
        this._puesto = puesto
        this._salario = salario
    }


    mostrarInfo() {
        console.log("\nInformación del Empleado:")
        console.log(`Nombre: ${this._nombre}`)
        console.log(`Puesto: ${this._puesto}`)
        console.log(`Salario: $${this._salario.toFixed(2)}`)
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question("Ingrese el nombre del empleado: ", (nombre) => {
    rl.question("Ingrese el puesto del empleado: ", (puesto) => {
        rl.question("Ingrese el sueldo inicial: ", (sueldo) => {
            const empleado = new Empleado(nombre, puesto, parseFloat(sueldo));
            

            empleado.mostrarInfo()
            
            rl.close()
        })
    })
})