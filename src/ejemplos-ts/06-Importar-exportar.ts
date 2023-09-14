import { Producto,calcularIVA2 } from "./05-desestructurar-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:8738
    },
    {
        desc:'Telefono2',
        precio:927
    },
    {
        desc:'Telefono3',
        precio:87
    }
]

const [total3,iva3]=calcularIVA2(carrito);
console.log(`Total: ${total3}`);
console.log(`IVA: ${iva3}`);