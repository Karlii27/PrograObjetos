class Calculadora {
    static sumar(a, b) {
      return a + b;
    }
  
    static restar(a, b) {
      return a - b;
    }
  
    static multiplicar(a, b) {
      return a * b;
    }
  
    static dividir(a, b) {
      if (b === 0) {
        return "Error: División por cero";
      }
      return a / b;
    }
  }
  
  // Llamar a métodos estáticos de clase Calculadora sin crear una instancia
  console.log(Calculadora.sumar(6, 4));
  console.log(Calculadora.dividir(2, 2)); 
  console.log(Calculadora.restar(6, 4));
  