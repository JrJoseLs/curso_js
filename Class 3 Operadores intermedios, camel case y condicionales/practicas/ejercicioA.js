// 3 chicos quieren comprar el Helado mas caro...
//precios de los helados:

/*
Roberto = 1.5 usd
Pedro 1.7 usd
Cofla = 3 usd
---------------

agua = 0.6 usd
crema = 1 usd
heladix = 1.6 usd
heladovich = 1.7 usd
heraldo = 1.8 usd
confites = 2.9 usd
poste 1/4KG -> 2.9 usd


Crear soluciones 
    - Pedirles que ingresen el monto que tienen  y mostrarle el helado mas caro que pueden conprar
    - si hay 2 o mas con el mimso precio, mostrar ambos
    -Cofla quiere saber cuando es el vuelto
*/

dineroCofla = prompt ("cuanto dinero tinens Cofla?");
dineroRoberto = prompt ("cuanto dinero tinens Roberto?");
dineroPedro = prompt ("cuanto dinero tinens Pedro?");

dineroCofla = parseInt(dineroCofla);


if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert ("compra el helado de agua");
    // Cofla quiere saber la devuelta
    alert("devuelta" + (dineroCofla - 1));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert ("compra el helado de crema");
    alert("devuelta" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert ("compra el helado de heladix");
    alert("devuelta" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert ("compra el helado de heraldo");
    alert("devuelta" + (dineroCofla - 1.8));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert ("compra el helado de confetis o poste 1/4kg");
    alert("devuelta" + (dineroCofla - 2.9));
}
else if (dineroCofla >= 2.9) {
} else {
    alert ("no te alcanza pa una mierda");
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert ("compra el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert ("compra el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert ("compra el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert ("compra el helado de heraldo");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert ("compra el helado de confetis o poste 1/4kg");
}
else if (dineroRoberto >= 2.9) {
} else {
    alert ("no te alcanza pa una mierda");
}


if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert ("compra el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert ("compra el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert ("compra el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert ("compra el helado de heraldo");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert ("compra el helado de confetis o poste 1/4kg");
}
else if (dineroPedro >= 2.9) {
} else {
    alert ("no te alcanza pa una mierda");
}



// nota
/*
Esta no es la mejor foma de hacer el ejecicio, existe mas optima,
esto es un ejemplo para ir trabajando la logica y conceptos del lenguaje
*/



