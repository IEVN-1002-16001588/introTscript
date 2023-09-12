function suma():void{
    console.log(`la suma es ${3+5}`);
}

suma();

function suma2(a:number,b:number):number{
    return a+ b;
}

const result=suma2(7,8);
//la comilla `se usa para poder llamar la variable
console.log(`La suma es ${result}`)

function multiplicar(n1:number,n2:number,base:number):number{
    
    let tem=n1*base;
    return tem;
}

console.log(`La multiplicacion es = ${multiplicar(3,4,5)}`);

interface Mascotas{
    nombre : string;
    edad : number;
    //Asi predefinimos una function
    mostrarEdad:()=>void;
}
                  //De esta manera la variable se vuelve tipo mascota
function calcular(mascota:Mascotas,x:number):void{
    mascota.edad=x;
    console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre: 'Miau',
    edad: 2,
    mostrarEdad(){
        console.log('La edad es :', this.edad);
    }
}
calcular(nuevaMascota,3);