

function calcularMediadePromedio(lista){
    const resultado= document.querySelector(".resultado_mediana")

    const sumalista=lista.reduce(function(valorAcumulado=0,nuevoValor){
    return valorAcumulado+nuevoValor
    })
    
    
    const promedioLista=sumalista / lista.length
    
    resultado.innerText = `Tu mediana de promedio es: ${promedioLista}`

}



function calcularMedia(){
    const resultado= document.querySelector(".resultado_mediana")


const medianaInput = document.getElementById("promedioMediana");
const medianaValor = medianaInput.value;
 
let arrayMediana = Array.from(medianaValor.split(","), Number);

const lista =arrayMediana.sort(function compare (a,b) {return a - b})

const mediaLista= parseInt(lista.length / 2) 


function espar(numero){
    return numero % 2===0     
}


let mediana;

if (espar(lista.length)){
    const elemento1=lista[mediaLista -1]
    const elemento2=lista[mediaLista ]

    const promedio=calcularMediadePromedio([elemento1,elemento2])
    mediana=promedio;
   
}else{
    mediana = lista[mediaLista]
    

    resultado.innerText = `Tu mediana de promedio es: ${mediana}`

}


}