/*Concatenacion*/

/*esta forma de concatenar nos trae un problema, en caso de que quisieramos
traer numeros y concatenarlos y para no sumarlos, forzamos un string*/

/*
saludo = "hola Pedro!, ";
pregunta = "Como estas?";

frase = saludo + pregunta;

document.write(frase)

/* mas maneras*/

/*
numero1 = 5;
numero2 = 8;

/*
numero1 = "5";
numero2 = "8";
*/

/*
frase = "" + numero1 + numero2 /*no lo suma lo convierte todo en cadena de texto*/
/*
document.write(frase)
*/



/*para hacer lo de manera dinamca usamos concant (metodo concat)*/
/*
numero1 = "5";
numero2 = 8;

frase = "" + numero1.concat(numero2);
document.write(frase)
*/

/* Forma recomentada para concatenear ${}*/
nombre = "Jonh Doe";
frase = `Soy  ${nombre} Y estoy caminando`;
document.write(frase);





