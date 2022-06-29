
function calcularmoda(){
    const resultado = document.querySelector(".resultado_moda")

    const listaModa=document.getElementById("modaInput");
const listaModaValue = listaModa.value

let listaModaArray = Array.from( listaModaValue.split(","), Number);

 

const listaCount = {};

listaModaArray.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento]+=1
        }
        else{
            listaCount[elemento]=1
        }
    }
)


const listaArray = Object.entries(listaCount).sort(function
 (a,b){return a[1] - b[1];
}
);

parseFloat(listaArray[0])

const moda = listaArray[listaArray.length - 1];

resultado.innerText = `Tu moda es el numero ${moda[0]} con una frecuencia de ${moda[1]} veces`
}

 
 