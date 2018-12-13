// Tipos
let batman1: string = "Bruce";
let superman1: string = "Clark";

let existe1: boolean = false;

// Tuplas
let parejaHeroes: [string, string] = [batman1, superman1];
let villano1: [string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
let aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

//Enumeraciones
enum Fuerza{
  fuerzaAcuaman = 0,
  fuerzaSuperman = 1,
  fuerzaFlash = 5,
  fuerzaBatman = 100
}

let fuerzaAcuaman = Fuerza.fuerzaAcuaman;

// Retorno de funciones
function actilet_batiseñal():string {
  return "activada";
}

function pedir_ayuda():void {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = (<string>poder).length; // poder.toString().lenght
console.log(largoDelPoder);
