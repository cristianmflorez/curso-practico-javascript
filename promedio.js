

function calcularMedia(lista){
    /*    let sumaLista= 0;

    for(i=0;i<lista.length;i++){
        sumaLista = sumaLista+lista[i];
    }

    */

    const sumaLista = lista.reduce(
        function (valorAcumulado, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
        
    );

    const promedio = sumaLista/(lista.length);

    return promedio;
}

function calcularMediana(lista){
    let mitad = parseInt(lista.length / 2);

    lista.sort(function(a, b){return a-b});
    
    let mediana;

    if (lista.length % 2 != 0){
        mediana=lista[mitad];
    }else{
        mediana = (lista[mitad]+lista[mitad-1])/2;
    }

    return mediana;
}

function calcularModa(lista){
    let moda;
    let repeticiones=0;

    let rep=0;

    for(j=0;j<lista.length;j++){
        for(i=0;i<lista.length;i++){

            if(lista[i]==lista[j]){
                rep++;


                if(rep>repeticiones){
                    moda=lista[i];
                    repeticiones=rep;
                } 
                
            }
        }

        rep=0;
    }


    return moda + " con " + repeticiones + " apariciones"
    

}