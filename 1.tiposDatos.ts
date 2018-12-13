//BOOLEANS
let esSuperman:boolean = true;
let esBatman:boolean;
let esAcuaman:boolean = true;


if(esSuperman){
    console.log("holi");

} else {
    console.log("Opppps! ohh");
}

esSuperman = convertirClark();


function convertirClark(){
    return false;
}

//NUMBERS
let avengers:number  = 5;
let villanos:number =8;
let otros = 2;

if(avengers>villanos){
    console.log("estamos salvados!!");
} else {
    console.log("Estamos muertos!!");
}

otros = 123;
otros = 123.12;

//STRINGS

let batman:string = "batman";
let linternaVerde:string = "Linterna Verde";
let volcanNegro:string = "Volcan Negro";

console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);

//unir strings

let concat:string=`Los heroes son:${batman}, ${linternaVerde}, ${volcanNegro}`;
console.log(concat);

//ANY

let vengador:any;
let existe;
let derrotas;

vengador = "Dr. Strange";
console.log(vengador.charAt(0));

vengador = 150.6456;
console.log(vengador.toFixed(2));

console.log(existe);

//ARRAYS

let arreglo:number[] = [1,2,6,5,80];
arreglo.push(58);

let arreglo2:number[] = [9,1,5,4,2];

let villanosMarvel:string[] = ["Omega rojo","Dormammu","DUende Verde"];
villanosMarvel.push("Oscar");
console.log(villanosMarvel[1].charAt(0));

//TUPLAS
//limitas el tipo de dato que contendra el arreglo
let heroe:[string,number] = ["Dr.Strange",100];

heroe[0] = "Jorge"; // debe ser string por la tupla
heroe[1] = 5; //debe ser numero

//EMUN- ENUMERACIONES
//Para darle sentido logico a numeros

enum Volumen{
    min = 1,
    medio = 5,
    max = 10
}

let audio:number = Volumen.medio; 
console.log(audio);

console.log(Volumen);
console.log(Volumen[5]);

//VOID
//es el opuesto a any (ningun tipo)

function llamar_batman():void{ // le asignas el valor que va a retornar
    console.log("Mostrar la batiseñal");
}


let mensaje = llamar_batman();

console.log(mensaje);

//NEVER
//Representa un valor que nunca debe suceder
function error(mens:string):never{
    throw new Error(mens);    
}

//error("Error critico... linea 115 alcanzada");

//Aserciones de tipo
//cuando sabes lo que estas haciendo y typescript no

let cualqueirValor:any ="Cualquier cosa";

let largoDelString:number = (<string>cualqueirValor).length;
console.log(largoDelString);

