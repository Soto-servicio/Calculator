const PI = Math.PI;

function areaCuadrado(lado){
  return  lado * lado;
};

function perimetroCuadrado(lado){
 return lado * 4
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

function perimetroCirculo(diametro, PI){
    return diametro * PI
}

function areaCirculo(PI, radio){
    return PI * (radio * radio)
}

function Isoseles(ladoA,ladoB, base){
    return Math.sqrt((ladoA*ladoB) - ((base*base) / 4))
}

 

function perimetoDelCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
     

    const resultado = document.getElementById("respuestaCuadrado")
resultado.innerText = perimetro + " cm"
}

function areaDelCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value)
     
    const resultado = document.getElementById("respuestaCuadrado")
    resultado.innerText = area + " cm"
}


function calcularPerimetroTriangulo(){
    const LadoA = document.getElementById("inputTrianguloA");
    const valueA= LadoA.value;
    valorA=parseFloat(valueA)


    const LadoB = document.getElementById("inputTrianguloB");
    const valueB= LadoB.value;
    valorB=parseFloat(valueB)


    const base = document.getElementById("inputTrianguloBase");
    const valueBase= base.value;
    valorBase=parseFloat(valueBase)


    const perimetro  = perimetroTriangulo(valorA ,valorB , valorBase)
     
     
     const resultado = document.getElementById("respuestaTriangulo")
     resultado.innerText = perimetro + " cm"

}


function calcularAreaTriangulo(){
    const base=document.getElementById("inputTrianguloBase");
    const valueBase = base.value;
    const valorBase= parseFloat(valueBase);

    const altura = document.getElementById("inputTrianguloAltura");
    const valueAltura= altura.value;
    const valorAltura = parseFloat(valueAltura)


    const area = areaTriangulo(valorBase, valorAltura)
   
    const resultado = document.getElementById("respuestaTriangulo")
    resultado.innerText = area + " cm"
}

 
function calcularPerimetroCirculo() {
    const diametro = document.getElementById("inputDiametro");
    const value = diametro.value;

 const perimetro = perimetroCirculo(value,PI)
  
 const resultado = document.getElementById("respuestaCirculo")
 resultado.innerText = perimetro + " cm"
 }

 
 function calcularAreaCirculo(){
    const radio = document.getElementById("inputRadio");
    const value = radio.value;

 const area = areaCirculo(PI,value)
 
const resultado = document.getElementById("respuestaCirculo")
resultado.innerText = area + " cm"
 }



  function alturaIsoseles(){
    const inputA = document.getElementById("ladoAIsoseles") 
    const ladoAtriangulo = inputA.value 
    const ladoA = parseFloat(ladoAtriangulo)

    const inputB = document.getElementById("ladoBIsoseles") 
    const ladoBTriangulo  = inputB.value
     const ladoB = parseFloat(ladoBTriangulo) 

    const inputBase = document.getElementById("baseIsoseles")
    const basetriangulo= inputBase.value 
    const base =parseFloat(basetriangulo)


     const resultado = Isoseles(ladoA, ladoB, base)
       

    if(ladoA===ladoB){
        const resultadoAltura = document.getElementById("respuestaIsosceles")
        resultadoAltura.innerText = resultado + " cm"
    }
    else{
        alert("Lo siento mi pana pero esto no es un triangulo isoseles")
    }
}

