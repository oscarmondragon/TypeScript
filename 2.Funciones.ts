//FORMAS DE DECLARARLAS
let hero:string = "Flash";

function imprime_heroe():string{
    return hero;
}

let activar_batisenial = function():string{
    return "Activar batiseñal";
}
console.log(imprime_heroe());
console.log(activar_batisenial());

//Parametros oblogatorios

function nombreCompleto(nombre:string, apellido:string):string{ //aqui es obligatorio dos parametros de tipo string
    return nombre + " " + apellido;
}

let nameHeroe =nombreCompleto("Oscar","Mondragon");

console.log(nameHeroe);

//Parametros opcionales

function nameCompleto(nombre:string, apellido?:string):string{ // el simbolo "?" indica que es opcional
    if(apellido){
        return nombre + " " + apellido;
    } else{
        return nombre;
    }
    
}

let nombreCom = nameCompleto("Jaime");
console.log(nombreCom);

//Parametros por default
    
function nameCompletoDefault(nombre:string, apellido:string, capitalizado:boolean = true):string{ // se asigna el valor true por default
        if(capitalizado){
            return capitalizar(nombre) + " " + capitalizar(apellido);
        } else{
            return nombre + " " + apellido;
        }
    
}

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toLocaleUpperCase() + palabra.substring(1).toLocaleLowerCase();
}
let nombreCompl = nameCompletoDefault("jaime","estrada",true);
console.log(nombreCompl);

//Parametros REST

function nombreCompletoRest(nombre:string, ...losDemasParametros:string[]):string{ // recibe mas parametros y los une en un arreglo
    return nombre + " " + losDemasParametros.join(" ");
}

let super1:string = nombreCompletoRest("Clark", "Joseph", "Kent");
let super2:string = nombreCompletoRest("Antonhy", "Edward", "Tony","Stark");

console.log(super1);
console.log(super2);



//Tipo funcion
function sumar(a:number, b:number):number{
    return a + b;
}

function saludar(nombre:string):string{
    return "I'm " + nombre;
}

function salvarMundo():void{
    console.log("El mundo esta salvado!!!");
}

let miFuncion: (a:number, b:number)=>number; // le indica que solo puede ser asignable a funciones
                                            // que cumplan ese criterio recibe 2 numeros y retorna un numero.

miFuncion = sumar;

console.log(miFuncion(4,6));




