"use strict";
// Tipos
var batman1 = "Bruce";
var superman1 = "Clark";
var existe1 = false;
// Tuplas
var parejaHeroes = [batman1, superman1];
var villano1 = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    Fuerza[Fuerza["fuerzaSuperman"] = 1] = "fuerzaSuperman";
    Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
    Fuerza[Fuerza["fuerzaBatman"] = 100] = "fuerzaBatman";
})(Fuerza || (Fuerza = {}));
var fuerzaAcuaman = Fuerza.fuerzaAcuaman;
// Retorno de funciones
function actilet_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length; // poder.toString().lenght
console.log(largoDelPoder);
