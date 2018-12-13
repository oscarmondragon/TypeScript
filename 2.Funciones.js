"use strict";
//FORMAS DE DECLARARLAS
var hero = "Flash";
function imprime_heroe() {
    return hero;
}
var activar_batisenial = function () {
    return "Activar batiseñal";
};
console.log(imprime_heroe());
console.log(activar_batisenial());
//Parametros oblogatorios
function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var nameHeroe = nombreCompleto("Oscar", "Mondragon");
console.log(nameHeroe);
//Parametros opcionales
function nameCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var nombreCom = nameCompleto("Jaime");
console.log(nombreCom);
//Parametros por default
function nameCompletoDefault(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substring(1).toLocaleLowerCase();
}
var nombreCompl = nameCompletoDefault("jaime", "estrada", true);
console.log(nombreCompl);
//Parametros REST
function nombreCompletoRest(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var super1 = nombreCompletoRest("Clark", "Joseph", "Kent");
var super2 = nombreCompletoRest("Antonhy", "Edward", "Tony", "Stark");
console.log(super1);
console.log(super2);
//Tipo funcion
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!!!");
}
var miFuncion; // le indica que solo puede ser asignable a funciones
// que cumplan ese criterio recibe 2 numeros y retorna un numero.
miFuncion = sumar;
console.log(miFuncion(4, 6));
