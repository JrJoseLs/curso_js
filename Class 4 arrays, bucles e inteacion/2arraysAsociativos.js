let pc = {
	nombre: "intelPc",
	procesador: "intel core I7",
    ram: "16GB",
    espacio: "1tb"
};

/*
document.write(pc)

// nos muestra objetos por no especificar, este no empieza por 0 debemos especificar la variable
// en este caso, no 0 sino nombre, al igual con los demsa 


document.write(pc["nombre"])
//o
document.write(pc["procesador"])
//etc...
*/

//es mas intuitivo que poner los numeros

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `el nombre de mi pc es: ${nombre} <br>
        el procesador es: ${procesador} <br>
        La memoria ram es: ${ram} <br>
        el espacio en disco es de: ${espacio} <br>`;

document.write(frase);
