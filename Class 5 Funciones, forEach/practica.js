// problema 1
// ejercicio cofla:
// - dejar pasar solo los mayores de edad.
// - la 1er persona que entre despues de las 2 AM, no paga.


/*
let free = false;

const validarCliente = (time) => {
    let edad = prompt ("Cual es tu edad?");
    if (edad > 18){
        if (time >= 2 && time < 7 && free == false){
            alert (`Puedes pasar gratis, eres la 1ra persona despues de la 2 AM`);
            free = true;
        } else (`son las ${time}:00Hs. Puedes pasar y paga la entrada`);

    } else 
    alert("A la mierda de aqui!! :v");
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
*/






// -------------------------------------------Problema 2------------------------------
// Crear un mini sistema que permita registrar los alumnos que estan presentes (p) y ausentes (a) en clase.
// Pasados 30 dias mostrar situacion final de todos los alumnos (Nro toral de presentes y ausentes)
// Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta repotando.

/*
let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("nombre del alumno" + (i+1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumnos in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumnos][0], alumnos)
    }
}

for (alumnos in alumnosTotales) {
    let resultado = `${alumnosTotales[alumnos][0]}: <br>
    ____Presentes: ${alumnosTotales[alumnos][1]} <br>
    ____Asistencias: ${30 - alumnosTotales[alumnos][1]}`;

    if (30 - alumnosTotales[alumnos][1] > 18 ){
        resultado += "<b style=`color:red` > REPROBADO POR INANCISTENCIAS </b><br> ";

    } else {
        resultado += "<br><br>"

    } document.write(resultado);
}
*/





// ------------------------------------------ Porblema 3
// - crear calculadora simple

const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2) =>{
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2) =>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2) =>{
    return parseInt(num1) * parseInt(num2);
}

alert ("Que operacion deseas realizar?")
let operacion = prompt ("1: suma, 2: resta, 3: division, 4: multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("1er numero para Sumar");
    let numero2 = prompt("2do numero para Sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
} 
else if (operacion == 2) {
    let numero1 = prompt("1er numero para Restar");
    let numero2 = prompt("2do numero para Restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}
else if (operacion == 3) {
    let numero1 = prompt("1er numero para Dividir");
    let numero2 = prompt("2do numero para Dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}

else if (operacion == 4) {
    let numero1 = prompt("1er numero para Multiplicar");
    let numero2 = prompt("2do numero para Multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`)
}



else{
    alert ("no se ha encontrado la operacion")
}


















