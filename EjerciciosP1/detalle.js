class Notas{
    constructor(titulo, detalle){
        this._titulo= titulo;
        this._detalle= detalle;
    }

    numPalabras(){
        return this._detalle.trim().split(/\s+/).length;
    }
}

const nota1= new Notas("Alarma", "Despertarse para ir al médico")
console.log(`La nota ${nota1._titulo} ha sido guardada correctamente. El número de palabras de su nota es de: ${nota1.numPalabras()}`)
const nota2= new Notas("Comer", "Recordá que debés comer 3 veces :)")
console.log(`La nota ${nota2._titulo} ha sido guardada correctamente. El número de palabras de su nota es de: ${nota2.numPalabras()}`)