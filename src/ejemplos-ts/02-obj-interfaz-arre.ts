


interface Alumno{
    //La propiedad de ? quiere decir que puede omitirse
    matricula?:number;
    nombre:string;
    email:string;
}

const alumno:Alumno={
    nombre:'juan',
    email:'juan@oc.com',
    }
    
console.log(alumno.nombre);

let mascotas:string[]=['Perro','Gato','Perico'];

mascotas[1]='Perico Verde';
mascotas.push('gato dos');
console.table(mascotas);

//Defiimos un arreglo para obtener cadenas y números que esta en blanco
let temp:(string|number)[]=[];
temp.push('RCR');
temp.push(34);