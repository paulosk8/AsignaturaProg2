// Tipo de datos primitivos - Inmutables
let numero = 23
numero = numero + 10
console.log(numero);

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero);

// Tipos de datos de referencia - Mutable
let usuario = {
    nombre: 'Paulo',
    clave: 12345,
    correo: 'paulogalarza@tsachila.edu.ec'
}
usuario.nombre = 'Erik'
console.log(usuario.nombre);

let frutas =  ['Manzana', 'Pera', 'Durazno', 'Melón']
frutas[2] = 'Sandia'
console.log(frutas[2]);

function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = {
    nombre: 'Antonio'
}
cambiarNombre(persona)

console.log(persona);