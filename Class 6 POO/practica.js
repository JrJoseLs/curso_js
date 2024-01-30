// Crear soluciones
/* PROBLEMA#1
-Crear un sistema para mostrarle a cofla las praticularidades de los 3 celulares.
-cada celular debe tener peso, resolucion de pantall, resulucion de camara y memoria ram
-Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.
*/



// clase
class Celular {
    //parametros
    constructor(color, peso, tamaño, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    //metodos
    precionarBotonEncendido(){
        if (this.encendido == false){
        alert("celular prendido");
        this.encendido = true;
        } else {
            alert("celular apagado")
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado")
        }
    }
    tomarFotos (){
        alert (`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideos (){
        alert (`grabando video en: ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        color: <b>${this.color}</b> <br>
        pero: <b>${this.peso}</b> <br>
        Tamaño: <b>${this.tamaño}</b> <br>
        resolucion de camara: <b>${this.resolucionDeCamara}</b> <br>
        resolucion de video: <b>${this.resolucionDeCamara}</b> <br>
        memoria Ram: <b>${this.memoriaRam}</b> <br>
        `;
    }
}

// PROBLEMA#2 implemetar todas estas cualidades en los celulares de alta gama

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram,);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara trasera: ${this.resolucionDeCamaraExtra}`;
    }
}



/*
celular1 = new Celular("rojo", "150g", "5 pulgadas", "hd", "1GB");
celular2 = new Celular("negro", "155g", "5.4 pulgadas", "full hd", "2GB");
celular3 = new Celular("blanco", "146g", "5.9 pulgadas", "full hd", "2GB");

document.write(`
    ${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>
`)
*/

/*
Celular1.precionarBotonEncendido();
celular1.tomarFotos();
celular1.reiniciar();
celular1.precionarBotonEncendido();
*/


celular1 = new CelularAltaGama("rojo", "130g", "5.2 pulgadas", "4k", "3GB", "full hd");
celular2 = new CelularAltaGama("negro", "142g", "6 pulgadas", "4k", "4GB", "hd");

document.write(`
    ${celular1.infoAltaGama()}<br><br>
    ${celular2.infoAltaGama()}<br>
    `);
