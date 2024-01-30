// PROBLEMA#3 
/*
-Crear un sistema que ayude a cofla a decidir cual app descargar.
-La informacion de los instaladores debe contener la cantidad de descargas y la puntuacion y el peso
-Las apps se deben poder instalar, abrir, cerrar y desinstalar.
*/

class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
            if (this.instalada == false){
                this.instalada = true;
                alert("app instalada correctamente")
            }
        }
    desinstalar(){
            if (this.instalada == true){
                this.instalada = false;
                alert("app desinstalada correctamente")
        }
    }
    abrir(){
        if (this.iniciada == false && this.intalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if (this.iniciada = true && this.intalada == true){
            this.iniciada == false;
            alert("app cerrada");
        }     
    }
    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
    `
    }
}   




app = new App("16.000", "5 estrellas", "900mb");
app2 = new App("4.000", "4 estrellas", "400mb");
app3 = new App("1.000", "2 estrellas", "720mb");
app4 = new App("2.000", "3.5 estrellas", "850mb");
app5 = new App("1.500", "4.5 estrellas", "920mb");
app6 = new App("3.050", "5 estrellas", "910mb");
app7 = new App("8.000", "1 estrellas", "150mb");



document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`
);


