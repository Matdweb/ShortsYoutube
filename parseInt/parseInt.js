//Hola hoy conoceremos el metodo parseInt() en JS 

//este metodo se encarga de tomar un valor decimal y convertilo en entero

parseInt( 'valor en string o numero decimal' , 'base decimal' ) //la base decimal utilizada normalmente es 10

// Ejemplo :
document.write(parseInt("10", 10 )+ '<br>')
document.write(parseInt("10.5", 10 )+ '<br>')

//Ademas este metodo es capaz de convertir un valor string (texto) a numero
document.write(parseInt("10 es un numero", 10)+ '<br>')

//error 
document.write(parseInt("Yo amo el numero 10", 10)+ '<br>')

//Matematicamante trabaja las bases numericas
document.write(parseInt("F", 16))
<>