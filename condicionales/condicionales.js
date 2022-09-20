// Hola - hoy aprenderemos a manejar el fulo de los programas por medio de las condicionales en JS 

//especificamente veremos la condicional if-else

//if = si o en caso de 
//else = sino o entonces

//Por ejemplo 
document.write(`¿ Quien es mas alto entre Alberto y Randall ?<br>`); 
let Alberto = 1.85; 
let Randall = 1.78; 

if(Alberto > Randall){
    document.write(`Alberto es mas alto`);
}else{
    document.write(`Randall es mas alto`);
}

//Tambien se puede combinar diferentes condiciones
let compu1 = [
    Componentes= {
        RAM : 8,
        Resolucion : 1440, 
        Procesador : `INTEL`, 
        Nucleos : 8,
        Memoria : `1TB`
    }
];


let compu2 = [ 
    Componentes= {
        RAM : 6,
        Resolucion : 1080, 
        Procesador : `RYZEN`, 
        Nucleos : 6,
        Memoria : `1TB`
    }
];

if(compu1[Componentes][RAM]>compu2[Componentes][RAM]){
    document.write(`la compu 1 tiene mayor RAM que la compu 2`);
}else if(compu1[Componentes][Resolucion]>=compu2[Componentes][Resolucion]){
    document.write(`la compu 1 tiene mayor Resolucion que la compu 2`);
}else{
    document.write(`La compu 2 tiene mayor resolcion y mayor RAM que la compu 1`);
}