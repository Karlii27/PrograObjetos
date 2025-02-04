class Persona{
    constructor(nombre, peso, altura){
        this._nombre= nombre;
        this._peso= peso;
        this._altura= altura;

    }
    calculoIMC(){
        return this._peso / (this._altura * this._altura)
    }

    resultadoIMC(){
        const imc= this.calculoIMC()
        if(imc < 18.5){
            return "Bajo Peso"
        }else if(imc >=18.5 && imc <= 24.9){
            return "Peso Normal"
        }else if(imc >=25.0 && imc <=29.0){
            return "Sobrepeso"
        }else{
            return "Obesidad"
        }
    }
}

const imcPerso= new Persona("Karla", 34.43, 1.56)
console.log(`Nombre: ${imcPerso._nombre}`)
console.log(`Su IMC: ${imcPerso.calculoIMC().toFixed(2)}`)
console.log(`Según su IMC, usted está en: ${imcPerso.resultadoIMC()}`)