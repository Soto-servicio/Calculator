function formula(precio, descuento){
    return (precio * (100 - descuento)) / 100
}

function calculoPorcentaje(){
    const precioInput = document.getElementById("precio");
    const precio = precioInput.value;

    const porcentajeInput = document.getElementById("porcentaje");
    const porcentaje = porcentajeInput.value;

    const resultado = formula(precio,porcentaje);
   
    const resultP = document.getElementById("resultado")
    resultP.innerText = "$" + resultado
}