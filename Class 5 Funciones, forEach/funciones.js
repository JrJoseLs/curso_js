//Ejemplo: (usar este bloque con funciones).
/*
let respuesta = prompt ("Hola, que tal tu dia?");

if (respuesta == "bien") {
    alert("Me alegro")
} else {
    alert("Que pena")
}
*/


/*
// si quiero hacerlo mas veces.
// uso las funciones y no debo repetir el codigo.
// simplemente llamarla desde otro bloque.

// Esto no se ejecuta simplente se declara la funcion
function saludar (){
let respuesta = prompt ("Hola, que tal tu dia?");
    if (respuesta == "bien") {
        alert("Me alegro")
    } else {
        alert("Que pena")
    }
}
// para ejecutarla 
saludar()
// para que pregunte mas de una vez..
//simplemente repito

saludar()


// ejemplo si estamos creando un juego y queremos que el boss 
// tenga nuestro mismo nivel, con funcion ahorramos todo ese codigo
// al igual que con un cohe etc...
*/


///---------------- RETURN (sirve para devolver un valor)--------------------------

/*
function saludar(){
    alert("hola")
    return "la funcion se ejecuto correctamente"
}

let saludo = saludar();
document.write(saludo
)
*/


// ------------------------- PARAMETROS------------------------

// hacerlo con funciones
/*
let num1 = 32;
let num2 = 12;

let res = num1 + num2;
document.write(res)
*/

// con funciones
/*
function suma () {
    let num1 = 32;
    let num2 = 12;

    let res = num1 + num2;
    document.write(res);
}
suma()
*/

// si quisiera sumar valores distintos.
// para eso estan los parametros.
/*
function suma (num1, num2) {
    let res = num1 + num2;
    document.write(res + "<br>");
}
suma(12, 32)
suma (22, 55)
*/

//x2
/*
function suma (num1,num2) {
    let res = num1 + num2;
    return res
}

let resultado = suma(20, 25);
document.write(resultado)
*/

//x3
/*
function saludar (nombre){
    let frase = `Hola ${nombre}! como estas?`
    document.write(frase)
}
saludar("Juan")
*/
//x3 - x2 saludar
/*
const saludar = function(nombre){
    let frase = `Hola ${nombre}! Como estas?`;
    document.write(frase)
}
saludar ("Juan")
*/


//------------- FUNCIONES FLECHAS---------function se convierte en =>-------
/*
const saludar = (nombre) => {
    let frase = `Hola ${nombre}! Como estas?`;
    document.write(frase)

}
saludar ("Juan")
*/

// nombre no necesita parentesis, porque solo es un parametro, ni las llaves, etc...
const saludar = nombre => {
    document.write("hola como estas?" + nombre);
}
saludar("pedro")














