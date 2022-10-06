//Hola hoy aprenderemos como funciina el control de flujo de programas atravez de la condicional 'switch'

//Ademas de ciertos ejemplos

//Horario de clases: 

let dia = prompt(`Digite el numero de dia de la semnana (1-3)`); 

document.write(`El dia ${dia} tienes clase de: `); 

switch(dia){
    case 1: document.write(`Fundamentos de informatica`)
    break; 
    case 2: document.write(`Estructura de datos`)
    break; 
    case 3: document.write(`Ciber-seguiridad`)
    break; 
    default: document.write(`nada, hoy tienes libre`)
}

//SIGUEME PARA LA PARTE 2 ...


//Hola hoy continuaremos aprendiendo sobre el control de flujo de progrmas con switch

//Chequea la parte 1...

//En este ejercicio veremos como definir el color de fondo de un cuadrado

let fondo = prompt(`Digite el color del cuadrado`);

let cuadrado = document.querySelector(".cuadrado");

switch(fondo){
    case 'rojo': cuadrado.setAttribute("style","background-color: red;")
    break; 
    
    case 'verde': cuadrado.setAttribute("style","background-color: green;")
    break;

    case 'azul': cuadrado.setAttribute("style","background-color: blue;")
    break;

    case 'amarillo': cuadrado.setAttribute("style","background-color: yellow;")
    break;
}

