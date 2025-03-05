class CalculadoraAvanzada {
    static potencia(base, exponente){
        return Math.pow(base, exponente)
    }

    static raizCuadrada(numero){
        if (numero < 0){
            return `ERROR: No se puede calcular la raíz cuadrada de un número negativo`;
        }
        return Math.sqrt(numero);
    }
}

// pruebas
console.log(CalculadoraAvanzada.potencia(2, 3)); // 8
console.log(CalculadoraAvanzada.raizCuadrada(16)); // 4
console.log(CalculadoraAvanzada.raizCuadrada(-4)); // Error