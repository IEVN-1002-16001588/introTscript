
//Desestructurar es dividir en partes

interface Reproductor{
    volumen:number;
    segundos:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundos:66,
    cancion:"Mañanitas",
    detalles:{
        autor:'Cepillin',
        anio:1978
    }
}

console.log(`Volumen actual: ${reproductor.volumen}`);
console.log(`Segundos: ${reproductor.segundos}`);
console.log(`Canción: ${reproductor.cancion}`);
console.log(`Autor: ${reproductor.detalles.autor}`)
console.log(`Año: ${reproductor.detalles.anio}`)

//De esta mnera podemos llamar directamente
const {volumen,segundos,cancion,detalles}= reproductor
console.log(`Volumen actual: ${volumen}`);
console.log(`VSegundos: ${segundos}`);

//Aqui lo vemos de nuevo pero con las interface anidados
const{autor}=detalles;
console.log(`Segundos: ${autor}`);