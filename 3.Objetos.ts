let flash1 = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido","Viaja por el tiempo"]
};


//Crear objetos con tipo especifico

let flash2:{nombre:string, edad:number, poderes:string[]} = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido","Viaja por el tiempo"]
};

//Metodos dentro de objetos

let flash3:{nombre:string, edad:number, poderes:string[], getNombre:()=>string} = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido","Viaja por el tiempo"],
    getNombre(){
        return this.nombre;
    }
};

//Tipos personalizados
// Es la estructura de un tipo de dato
type Hero={
    nombre:string, 
    edad:number, 
    poderes:string[], 
    getNombre:()=>string
}

let flash4:Hero= {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre rapido","Viaja por el tiempo"],
    getNombre(){
        return this.nombre;
    }
};

//Multiples tipos permitidos

let loquesea:boolean | number = true; // indica que puede ser tipo boleano o numero
loquesea = 10;

//Revisar el tipo de un objeto o variable

let cosa:any =123;
if(typeof cosa == "number"){
    console.log("Cosa, es un numero");
}