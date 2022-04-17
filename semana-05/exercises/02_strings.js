console.log('02_Strings');

/*
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase).
*/

console.log('Exercise 2-a');
var str1 = 'Cryptomator';
var result = str1;
console.log('the result of the UpperCase is: ' + result.toUpperCase());

/*
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring).
*/

console.log('Exercise 2-b');
var str1 = 'Cryptomator';
var result = str1.substring(0,5)
console.log('the result is: ' + result);

/*
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring).
*/

console.log('Exercise 2-c');
var str1 = 'Cryptomator';
var result = str1.substring(str1.length-3,str1.length)
console.log('the result is: ' + result);

/*
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

console.log('Exercise 2-d');
var str1 = 'cryptomator';
var result = str1.substring(0,1).toUpperCase() + str1.substring(2,str1.length).toLowerCase()
console.log('the result is: ' + result);


/*
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf).
*/

console.log('Exercise 2-e');
var str1 = 'Hello Radium';
var result = str1.indexOf(' ')
console.log('the result is: ' + result);

/*
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador
+).
*/

console.log('Exercise 2-f');
var str1 = 'hello radium';
var result =  str1.substring(0,1).toUpperCase() + str1.substring(1,str1.indexOf(' ')) + ' '
result += str1.substring(str1.indexOf(' ')+1,str1.indexOf(' ')+2).toUpperCase() 
result += str1.substring(str1.indexOf(' ')+2,str1.length).toLowerCase()
console.log('the result is: ' + result);
