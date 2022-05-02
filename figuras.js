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
    return lado1+lado2+base;
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