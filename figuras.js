//codigo cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado*4
};
//const area = ladoCuadrado*ladoCuadrado;

function areaCuadrado(lado){
    return lado*lado
}

//console.log("los lados del cuadrado miden: "+ladoCuadrado);
//console.log("el perimetro del cuadrado es: "+perimetroCuadrado);
//console.log("el area del cuadrado es: "+area);

console.groupEnd();

//codigo triangulo
console.group("Triangulos")

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriagulo=5.5;

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1+lado2+base);
};

function areaTriangulo(base, altura){
    return (base*altura)/2
};

//console.log("los lados del triangulo miden "+ladoTriangulo1+" cm, "+ladoTriangulo2+" cm y "+baseTriangulo+" cm.");
//console.log("el perimetro del triangulo es: "+(ladoTriangulo1+ladoTriangulo2+baseTriangulo));
//console.log("el area del triangulo es: "+(baseTriangulo*alturaTriagulo/2));

console.groupEnd();

console.group("circulo")

console.log("luego en el circulo usabamos Math.pi: "+Math.PI);

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value = input.value;

    const area=areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1=document.getElementById("inputLado1");
    const lado1=Number(input1.value);

    const input2=document.getElementById("inputLado2");
    const lado2=Number(input2.value);

    const inputbase=document.getElementById("inputBase");
    const base=Number(inputbase.value);

    const perimetro=perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const inputbase=document.getElementById("inputBase");
    const base=Number(inputbase.value);

    const inputAltura=document.getElementById("inputAltura");
    const altura=Number(inputAltura.value);

    const area=Number(areaTriangulo(base,altura));
    alert(area);
}