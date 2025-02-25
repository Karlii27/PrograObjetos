const readline= require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Usuario{
    constructor(nombre, edad){
        this.nombre= nombre
        this.edad= edad
    }

    mostrarInfo(){
        console.log(`Usuario: ${this.nombre}. Edad: ${this.edad}`)
    }
}

rl.question("Ingrese su nombre: ",(nombre)=>{
    rl.question("Ingrese su edad: ", (edad)=>{
        const usuario= new Usuario(nombre, parseInt(edad))
        usuario.mostrarInfo();
        rl.close()
    })
})