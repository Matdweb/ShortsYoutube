//Hola - en este video aprenderas 
//lo que son arreglos 
// y como funcionan 

//primero se define como cualquier otra variable 
let arreglo = ["elemento1","elemento2","elemento3 <br><br>"]; 
document.write(arreglo); 

//Tambien se puede llenar con variables 
let Nombre = "Mat_dweb"; 
let Numero = 124; 
let Correo = "mat.dweb@gmail.com"; 
let variables = [Nombre,Numero,Correo]; 

document.write(variables); 

//Tipos de arreglos
//se pueden crear arreglos de diferentes elementos 
// ya sean: 

//  1.datos (informacion) 
//  2. objetos
//  3. arreglos

//arreglo de datos 
let varible = "varible"; 
let Arreglo = ["texto", 124, variable]; 
document.write(Arreglo); 

//arreglo de objetos 
let Objetos = [
    {
        Nickname: "Crack-281328",
        Nivel: 100
    },{
        Nickname: "Gory30",
        Nivel: 85
    },{
        Nickname: "turbo-fgl",
        Nivel: 90
    },{
        Nickname: "The knight of gaming",
        Nivel: 1000
    }
]

console.log(Objetos); 

//arreglo de arreglos
let Componentes = [
    Hardware = ["tarjeta madre", "CPU", "RAM", "ROM"],
    Software = ["Sistemas operativos", "programas secundarios", "Aplicaciones"]
]; 
console.log(Componentes); 