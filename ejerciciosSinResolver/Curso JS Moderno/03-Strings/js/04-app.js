// En este video 3 métodos para strings
const producto = "         Monitor 20 Pulgadas       ";

console.log(producto);
console.log(producto.length);

// Eliminar el inicio
console.log(producto.trimStart()); // Elimina todos los espacios en blancos del inicio
// Eliminar del final
console.log(producto.trimEnd()); // Elimina todos los espacios en blanco del final

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd()); // Cortar en ambas direcciones

// Un método (que ya tiene rato ) es trim que hace lo mismo que .trimStart() y .trimEnd()
console.log(producto.trim());
