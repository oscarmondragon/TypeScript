"use strict";
var flash1 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido", "Viaja por el tiempo"]
};
//Crear objetos con tipo especifico
var flash2 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido", "Viaja por el tiempo"]
};
//Metodos dentro de objetos
var flash3 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido", "Viaja por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
var flash4 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido", "Viaja por el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
//Multiples tipos permitidos
var loquesea = true; // indica que puede ser tipo boleano o numero
loquesea = 10;
//Revisar el tipo de un objeto o variable
var cosa = 123;
if (typeof cosa == "number") {
    console.log("Cosa, es un numero");
}
