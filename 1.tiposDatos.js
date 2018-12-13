"use strict";
//BOOLEANS
var esSuperman = true;
var esBatman;
var esAcuaman = true;
if (esSuperman) {
    console.log("holi");
}
else {
    console.log("Opppps! ohh");
}
esSuperman = convertirClark();
function convertirClark() {
    return false;
}
//NUMBERS
var avengers = 5;
var villanos = 8;
var otros = 2;
if (avengers > villanos) {
    console.log("estamos salvados!!");
}
else {
    console.log("Estamos muertos!!");
}
otros = 123;
otros = 123.12;
//STRINGS
var batman = "batman";
var linternaVerde = "Linterna Verde";
var volcanNegro = "Volcan Negro";
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
//unir strings
var concat = "Los heroes son:" + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concat);
//ANY
var vengador;
var existe;
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.6456;
console.log(vengador.toFixed(2));
console.log(existe);
//ARRAYS
var arreglo = [1, 2, 6, 5, 80];
arreglo.push(58);
var arreglo2 = [9, 1, 5, 4, 2];
var villanosMarvel = ["Omega rojo", "Dormammu", "DUende Verde"];
villanosMarvel.push("Oscar");
console.log(villanosMarvel[1].charAt(0));
//TUPLAS
//limitas el tipo de dato que contendra el arreglo
var heroe = ["Dr.Strange", 100];
heroe[0] = "Jorge"; // debe ser string por la tupla
heroe[1] = 5; //debe ser numero
//EMUN- ENUMERACIONES
//Para darle sentido logico a numeros
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
console.log(Volumen[5]);
//VOID
//es el opuesto a any (ningun tipo)
function llamar_batman() {
    console.log("Mostrar la batiseñal");
}
var mensaje = llamar_batman();
console.log(mensaje);
//NEVER
//Representa un valor que nunca debe suceder
function error(mens) {
    throw new Error(mens);
}
//error("Error critico... linea 115 alcanzada");
//Aserciones de tipo
//cuando sabes lo que estas haciendo y typescript no
var cualqueirValor = "Cualquier cosa";
var largoDelString = cualqueirValor.length;
console.log(largoDelString);
