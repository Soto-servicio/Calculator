function promedioCalcular() {
    const promedioInput = document.getElementById("promedioInput");
    const promedioValue = promedioInput.value ;


    const listaPromedioArray = Array.from(promedioValue.split(","), Number)

    const resultado = calcularMediaAritmetica(listaPromedioArray);
    
}


function calcularMediaAritmetica(lista){

    const resultadoInput = document.querySelector(".resultado_promedio")
    //const resultadoValue = resultado.value

    const sumalista=lista.reduce(function(valorAcumulado=0,nuevoValor){
    return valorAcumulado+nuevoValor
    })
    
    
    const promedioLista=sumalista / lista.length
    
    resultadoInput.innerText= `El promedio aritmetico de tus datos es: ${promedioLista}` 
}
