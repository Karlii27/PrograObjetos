class Loteria {
    constructor(numero, cantidad) {
        this._numero = numero;
        this._cantidad = cantidad;
    }

    premio(){
        const numGanador = Math.floor(Math.random() * 100)
        console.log(`Número elegido: ${this._numero}`)
        console.log(`Número ganador: ${numGanador}`)

        if (this._numero === numGanador) {
            const premio = this._cantidad * 20;
            console.log(`¡Felicidades! Has ganado $${premio}.`)
        } else {
            console.log("Lo sentimos, el número que has elegido no es el premiado. ¡Intentalo de nuevo!")
        }
    }
}

const jugador = new Loteria(27, 5); 
jugador.premio();