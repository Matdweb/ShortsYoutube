//Hola - en este video aprenderas el metodo concat en JS 
// y su uso 

//concat derivada de la palabra concatenar
//concatenar = es unir o enlazar dos o mas elementos con relacion

//Por ejemplo strings(textos)
let fruta = `Esta fruta es una `; 
let nombreFruta = `Manzana<br><br>`;
let concat =  fruta.concat(nombreFruta); 
document.write(concat); 

//Tambien se puede hacer con mas de dos elementos
document.write(`<b>Rutina</b><br>`); 
let ejercicio1 = `Push-ups`; 
let ejercicio2 = `, Sentadillas`; 
let ejercio3 = `, Pull-ups<br><br>`;
let rutina = ejercicio1.concat(ejercicio2.concat(ejercio3));

document.write(rutina); 

//Ademas que convierte los numeros en texto
let numero1 = 'Ejercicios realizados: ';
let numero2 = 3; 
document.write(numero1.concat(numero2));  

