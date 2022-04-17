console.log('03_arrays');
/*
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los
meses 5 y 11 (utilizar console.log).
*/

console.log('Exercise 3-a');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log('months 5 and 11 are: ', months[4], months[10]);

/*
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log('Exercise 3-b');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log('months in alphabetical array order: ', months.sort());
/*
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
console.log('Exercise 3-c');
var months = ["Febrero", "Marzo", "Abril"];
months.unshift("Enero");
months.push("Mayo")
console.log('unshift and push: ', months);

/*
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
console.log('Exercise 3-d');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.shift('first');
months.pop('last');
console.log('shift and pop: ', months);

/*
e. Invertir el orden del array (utilizar reverse).
*/
console.log('Exercise 3-e');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.reverse();
console.log('Months reverse: ', months);


/*
f. Unir todos los elementos del array en un único string donde cada mes este separado por
un guión - (utilizar join).
*/
console.log('Exercise 3-f');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('string of months using join (-): ', months.join('-'));

/*
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar
slice).
*/
console.log('Exercise 3-g');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('the months from May to November are: ', months.slice(4,11))