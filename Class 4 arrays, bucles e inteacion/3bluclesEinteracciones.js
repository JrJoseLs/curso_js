// let Numero = 0;
/*
//sentencia while
while (Numero < 6){        //while crea un bucle, siempre regresa a preguntar y ejecuta    
    Numero++; // ++ aumenta 1 // while pregunta hasta 6 o hasta el numero declarado.
    document.write(Numero + "<br>") //br espacio en line
}
*/

/*
//sentencia do while
// do while. Es distinto primero pregunta y luego ejecuta...
do {
    
    document.write (Numero + "<br>");
    Numero++;
}

while (Numero <= 6)
*/

// sentencia break:
/*
while (Numero < 1000) {
    // si quiero deternerlo en el numero 10 puedo:
    //#1            "if (Numero !== 10)"
    
    Numero++;
    document.write (Numero + "<br>"); 
    //#2 forma correcta y mas sencilla
    if (Numero == 10){
        break;
    }
}
document.write ("fin"); 
 */

//--------------------------------------------------------------------------------------------------------------------------

 //sentencia for 
/*
for (let i = 0; i <= 20; i++) {
    document.write(i + "<br>")
}
*/

//#2 definiento la variable por fuera
/*
let i;
for (i;i >= 0; i--) {
    document.write(i + "<br>")
}
document.write(i)
.*/


//break
/*
for (let i = 0; i <= 20; i++) {
    
    //que termine en la vuelta 12
    if (i == 12) {      //termina en el 11
        break;
    }
    document.write(i + "<br>")
}
*/

// Salta un numero
/*
for (let i = 0; i <= 20; i++) {
    
    //que termine en la vuelta 12
    if (i == 12) {      //saltar el 12
        continue;       // no solo para numeo, tambien vainas de base de datos y ayuda a sensurar palabras o lo que sea
    }
    document.write(i + "<br>")
}
*/

// for in y for of
// es una estructura for
/*
let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales) {
    document.write(animal + "<br>") //este devulve numero, porque solo devuelve la posicion o indice de los elementos
    document.write(animales[animal] + "<br>") // para que devuelva los elementos...
}
    document.write("<br>") //salto de linea

for (animal of animales) {
    document.write(animal + "<br>") //off recorre todo
}
//ambos recorren el array, uno "in"guarda posicion y el otro "of"el valor de la posicion
*/

//-----------------LABEL------------------------------
array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio:
for (array in array2){
    if (array == 2) {
        for (let array of array1){
            document.write(array + "<br>")
            break forRancio;            //terminar todo el bucle. "tambien puedo terminar con continue"
        } 
    } else {
        document.write(array2 [array] + "<br>")
    }
}




