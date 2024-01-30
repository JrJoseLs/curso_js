// dentro del constructor van los parametros (especie, edad, etc.)
// this.; hace referencia al objeto. (es el objeto que voy a crear) o propiedades del objeto, this lo selecciona

/*
class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `soy ${this.especie}, tengo ${this.edad} 
        y soy de color ${this.color}`;
    }
    //metodo //funciones flechas no pueden ser usadas en los metodos
    verInfo (){
        document.write(this.info + "<br>")
    }


    // polimorfismo

    ladrar(){
        if (this.especie == "perro"){
            document.write("Waw! <br>")
        } else{
            document.write("no puede ladrar, ya qye es" + this.especie + "<br>")
        }
    }
}
/*
let perro = new animal("perro", 5, "rojo");
console.log(perro)
*/
// acceder a las propiedades es con "."
/*
let perro = new animal("perro",5,"marron");
let gato = new animal("gato",2,"negro");
let pajaro = new animal("pajaro",1, "verde");
*/

// esto se resume con un metodo. 
//(se crean dentro de la clase, si lo hacemos afuera se le dice funcion)
/*
document.write(perro.info + "<br>") 
document.write(gato.info + "<br>") 
document.write(pajaro.info + "<br>") 
*/

// Ejecutar metodo
/*
perro.verInfo();
gato.verInfo();
pajaro.verInfo();
*/
// abstraccion, modularidad, jeralquia // abstraccion, de hecho este es un ejemplo.

// si dentro de un metodo de la clase animal tengo ladrar, no todos los animales ladran
    //otro concepto de relaciones, no tiene sentido que pongamos ladrar y para eso se usa 
    // otro concepto que es la herencia

//Herrencia. Toma todas la propiedades de la otra clase pero agrega cosas nuevas
//      no necesita this.especie, etc.. porque lo esta heredando.

/*
class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;

        //con herencia puedo agregar metods y la chingada a la clase
    }
    static ladrar(){
            alert("Waw!");
        } 
            
}

// No puedo tener un objeto con el mismo nombre que la clase (perro = perroo)
let perro = new Perro("perro",5,"marron","doberman");
let gato = new Animal("gato",2,"negro");
let pajaro = new Animal("pajaro",1, "verde");

perro.ladrar();
gato.verInfo();
pajaro.verInfo();
*/

//Metodos estaticos y metodos acesores (static, setters and getters)
class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color
        this.info = `soy ${this.especie}, tengo ${this.edad} 
        y soy de color ${this.color}`;
    }
    verInfo (){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;

    }
    //setters
    set setRaza(newName){
        this.raza = "newName"
        }   
    //getters
    get getRaza() {
        return this.raza;
    }
}

// anteriormente tiene let, pero las clases deben ser definidas con const.
const perro = new Perro("perro",5,"marron","doberman");
const gato = new Animal("gato",2,"negro");
const pajaro = new Animal("pajaro",1, "verde");

//raramente los getters y setter funcionas como propiedades
perro.setRaza = "pedro";
document.write(perro.getRaza)
