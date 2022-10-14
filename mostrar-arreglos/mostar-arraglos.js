//Hola - hoy veremos como podemos ver los arreglos asociativos en la consola del navegador

//Recordemos el ejemplo del arreglo asociativo del video pasado 
let componentes = {
    Memoria: ["RAM","ROM", "Memoria central"], 
    Procesador: ["UC", "UAL"],
    HardwareExt: ["Teclado", "Mouse", "Memoria Ext"]
}

//Este arreglo esta conformado por tres elementos: 
    // Memoria = ["RAM","ROM", "Memoria central"]
    // Procesador = ["UC", "UAL"]
    // HardwareExt = ["Teclado", "Mouse", "Memoria Ext"]

//cada elemento por su parte esta conformado por mas elementos

//ahora veamos como mostar esto en nuestra pagina web 

console.log(componentes)

//Pero de esta manera se pueden mostrar los arreglos con una ruta especifica
document.write('Componentes del computador: '+'<br> - ')

document.write(componentes.Memoria[2]+'<br> - ') //memoria central 
document.write(componentes.Procesador[1]+'<br> - ') //UAL 
document.write(componentes.HardwareExt[0]+'<br>') //teclado