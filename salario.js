 const Venezuela = [];
 







function MedianaButton(){ 
    const datos=document.querySelector(".datos")
    const datosName=document.querySelector(".datos-name")
    const datosSalary=document.querySelector(".datos-salary")
    const inputSalary = document.getElementById("inputSalary")
    let salaryFinal= inputSalary.value;
    let salary = parseFloat(salaryFinal)
     

    const inputName = document.getElementById("inputName")
    let name= inputName.value;

     

    Venezuela.push({
      name: name,
      salary: salary,
    });
    

    const nombreVenezuela = Venezuela.map(function(persona) {
        return persona.name
    })
    
    const salarioVenezuela = Venezuela.map(function(persona) {
        return persona.salary
    })
 

datos.innerText= `Tus datos por ahora son:`

datosName.innerText = `Nombre: ${nombreVenezuela.join(" / ")}`

datosSalary.innerText = `Salario: ${salarioVenezuela.join("$  /  ") }$`
}



 





  /*  */

function CalcularMediana() { 
    const resultMediana = document.querySelector(".medianaResult")

const salariosVen = Venezuela.map(function(persona) {
    return    persona.salary;
    });
    
 const salariosFinal = salariosVen.sort(function(a, b) {
    return a-b
});
    
 

 const mediaLista= parseInt(salariosFinal.length / 2) ;




function espar(numero){
    return numero % 2===0     
}



let mediana;

if (espar(salariosFinal.length)){
    const elemento1=salariosFinal[mediaLista -1];
    const elemento2=salariosFinal[mediaLista];

    const promedio=calcularMediadePromedio([elemento1,elemento2])
    mediana=promedio;
}else{
    mediana = salariosFinal[mediaLista]
    
    resultMediana.innerText = mediana + "$"
}

 


  
 }



 function calcularMediadePromedio(lista){

    const resultMediana = document.querySelector(".topResult");

    const sumalista=lista.reduce(function(valorAcumulado=0,nuevoValor){
        return valorAcumulado+nuevoValor
        })
        
        
        const promedioLista=sumalista / lista.length
        
        resultMediana.innerText = promedioLista + "$"
     
}







function top10(){

const result = document.querySelector(".topResult");


    const salariosVensorted = Venezuela.sort(function(a, b) {
        return a.salary-b.salary
    });
        
    const spliceStart= (salariosVensorted.length*80) / 100;
    const spliceEnd = salariosVensorted.length - spliceStart ;

    const salariosVentop10= salariosVensorted.splice(spliceStart,spliceStart)

    

const nombre = salariosVentop10.map(function(persona) {
    return persona.name
})

const salario = salariosVentop10.map(function(persona) {
    return persona.salary
})


 
    if(salariosVentop10.length===1){
        result.innerText=      `El salario top es del trabajador ${nombre} con un monto de: ${salario}$`
    
    }
    else {
      result.innerText =  `Los salarios top son de los trabajadores ${nombre.join("-")} con montos de: ${salario.join("-")}$`
    }
    

}