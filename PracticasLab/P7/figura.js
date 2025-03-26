//Clase base
class Figura{
    radio;
    calcularArea(){
        throw new Error("Este metodo debe ser implementado por las subclases o clases hijas")
    }
}
 //Clases Hijas
 class Circulo extends Figura{
    constructor(radio){
        super()
        this.radio= radio
    }
    //Polimorfismo
    calcularArea(){
        return Math.PI*this.radio**2
    }
 }

 class Rectangulo extends Figura{
    constructor(ancho, alto){
        super()
        this.ancho= ancho
        this.alto= alto
    }
    calcularArea(){
        return this.ancho * this.alto
    }
 }

  class Triangulo extends Figura{
    constructor(base, altura){
        super()
        this.base= base
        this.altura= altura
    }
    calcularArea(){
        return(this.base * this.altura)/2
    }
  }

  //Función que recibe un array de figuras y calcula sus areas
function calcularAreas(figuras){
    figuras.forEach(figura=>{
        console.log(`Area de ${figura.constructor.name}: ${figura.calcularArea().toFixed(2)}`)
    })
}

//Instancia de las figuras
const figuras=[
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
]

calcularAreas(figuras)