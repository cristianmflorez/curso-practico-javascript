

function calcularPrecio(){

    const precio=document.getElementById("precioOriginal")
    const precioOriginal=Number(precio.value);

    const desc=document.getElementById("descuento");
    const descuento=Number(desc.value);
    
    const mensaje = Number(precioOriginal*((100-descuento)/100));

    const result=document.getElementById("precioFinal");
    result.innerText = `El precio final es de: ${mensaje}`;
}