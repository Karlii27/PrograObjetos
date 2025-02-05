class Sancion{
    constructor(estudiante, falta){
        this._estudiante= estudiante;
        this._falta= falta
    }

    multa(){
        switch (this._falta) {
            case "Llegada tardía":
                console.log(`El estudiante ${this._estudiante} llegó tarde. Total a pagar: $1.00.`)
                break;
            case "No entrar a clases":
                console.log(`El estudiante ${this._estudiante} ha sido encontrado en los pasillos en horas de clase. Total a pagar: $3.00.`)
                break;
            case "Presentarse sin la ropa adecuada":
                console.log(`El estudiante ${this._estudiante} se presentó con ropa inadecuada. Total a pagar: $5.00.`)
                break;
            case "Uso inadecuado de las instalaciones":
                console.log(`El estudiante ${this._estudiante} no acató los reglamentos de esta institución. Total a pagar: $10.00`)
                break;
            default:
              return "Estudiante sin sanciones. ¡Sigue así!"
        }
    }
}

const estudiante= new Sancion("Karla", "Uso inadecuado de las instalaciones")
estudiante.multa()

const estudiante2= new Sancion("Daniela", "Llegada tardía")
estudiante2.multa()

const estudiante3= new Sancion("Flavia", "Presentarse sin la ropa adecuada")
estudiante3.multa()

const estudiante4= new Sancion("Emely", "No entrar a clases")
estudiante4.multa()