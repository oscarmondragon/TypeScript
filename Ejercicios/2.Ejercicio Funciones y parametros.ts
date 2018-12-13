// Funciones Básicas
function sumarEjercicio( a:number, b:number ):number{
  return a + b;
}

let contar: (heroes:string[])=>number = function( heroes:string[] ):number{
  return heroes.length;
}

let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean= false ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes(persona:string, ...personas:string[] ){
  return persona + ", "+ personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:any[] ){
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n:number, t:string, b:boolean, arr:any[])=>void;

noHaceNadaTampoco = noHaceNada; //si se pueden igualar