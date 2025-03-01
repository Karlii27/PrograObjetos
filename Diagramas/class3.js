class Empleado {
    constructor(nombre, puesto, salario) {
        this._nombre = nombre
        this._puesto = puesto
        this._salario = salario
    }

    calcular() {
        const salarioAnual = this._salario * 12;
        console.log(`El salario anual de ${this._nombre} es: $${salarioAnual}`);
        return salarioAnual;
    }

    aumentar(porcentaje) {
        if (porcentaje > 0) {
            const aumento = this._salario * (porcentaje / 100);
            this._salario += aumento;
            console.log(`El salario de ${this._nombre} ha sido aumentado en un ${porcentaje}%. Nuevo salario: $${this._salario}`);
        } else {
            console.log("El porcentaje de aumento debe ser mayor que 0.");
        }
    }
}


const empleado1 = new Empleado("Damaris López", "Chef", 2500);

empleado1.calcular()
empleado1.aumentar(20)
empleado1.calcular()