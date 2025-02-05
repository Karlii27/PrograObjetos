class Escala {
    constructor(temperatura, escala){
        this._escala= escala;
        this._temperatura= temperatura
    }
    fahrenheitTocelsius(){
        return ((this._temperatura - 32)*5/9).toFixed(2)
    }
    celsiusTofahrenheit(){
        return ((this._temperatura*9/5) + 32).toFixed(2)
    }
    kelvinTofahrenheit(){
        return ((this._temperatura - 273.15)* 9/5 + 32).toFixed(2)
    }
    kelvinTocelsius(){
        return (this._temperatura - 273.15).toFixed(2)
    }
    conversion(){
        switch (this._escala) {
            case "fahrenheit":
                console.log(`Su conversión de ${this._temperatura}°F a grados Celsius es de: ${this.fahrenheitTocelsius()}°C`)
                break;
            case "celsius":
                console.log(`Su conversión de ${this._temperatura}°C a grados Fahrenheit es de: ${this.celsiusTofahrenheit()}°F`)
                break;
            case "kelvin":
                console.log(`Su conversión de ${this._temperatura}K a grados Fahrenheit es de: ${this.kelvinTofahrenheit()}°F`)
                console.log(`Su conversión de ${this._temperatura}K a grados Celsius es de: ${this.kelvinTocelsius()}°C`)
                break;
            default:
                return "Escala no valida"
        }
    }
}

const convertir= new Escala(80, "fahrenheit")
convertir.conversion()