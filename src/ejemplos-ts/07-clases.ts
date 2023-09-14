
class Persona2{
    nombre:string;
    edad:number;

    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }
}

let persona2 : Persona2;
persona2=new Persona2('Mario',24);
persona2.imprimir();

class Dado{
    private valor:number=0;

    public tirar(){
        this.generar();
    }

    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }

    public imprimir(){
        console.log(`Te Toco el valor: ${this.valor}`);
    }
}

let dado1 = new Dado(); 
dado1.tirar();
dado1.imprimir();

class Persona3{
    constructor(public nombre:string,public edad:number){}

    imprimir(){
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }
}