/*Operadores de comparacion*/
/*
let numero = 23;
let numero2 = 13;

let numero3 = 32;
let numero4 = 15;

let numero5 = 32;
let numero6 = 15;

let texto = "23";
let texto2 = "texto 2";

//Operador de igualdan: "equality"(==) verifica si un numeo es igual a otro  con true or false
/*
document.write(numero == numero2)

//"Inequeality (!=)"", lo contrario, preguntarse si son diferentes
/*
document.write(numero != numero2)

//Compara que sean estrictamente iguales: (identify ===) no diferencia tipos de datos, solo pregunta si el valor es el mismo
/*
document.write(texto === numero)

//Contrario de estructamente igual, si no es estrictamente igual
/*document.write(texto !== numero)

//Greater then (mayor que, menor que, mayor o igual, etc... ">, <, >=, <=")
/*document.write(numero > numero2)
document.write(numero < numero2)
document.write(numero >= numero2)
document.write(numero <= numero2)
//x2
/*
let resultado = numero > numero2;
document.write(resultado)

/*-------------------Operadores logicos-------------------*/

// let valor = true;
// let valor2 = true;

// Si las 2 condiciones se cumplen sera verdadero. (solo valores valeanos)

//x2

/*
// let resultado = valor && valor2; //(AND "Si las 2 condiciones se cumplen sera verdadero")
num1 = 12;
num2 = 24;

afirmacion1 = num1 > num2;
afirmacion2 = num1 != num2;
document.write(afirmacion1 && afirmacion2);


// let resultado2 = valor || valor2; // (OR "solo si ambas son falsas")
document.write(afirmacion1 || afirmacion2);

// let resultado3 = !valor; // (NOT "solo regresa lo contrario")
document.write(!afirmacion1)
*/

// mezclar operaciones

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

        //true          true                false           true     
op = (num1 < num2 || num2 < num3 ) && ( (!num1 != num2) && num5 != num3);
                // true                             false               = false
        //true          false               false           false
op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2)|| num3 != num3)
    //            false                         false               = true  
document.write(op)






