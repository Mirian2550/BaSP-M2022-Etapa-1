console.log('06_functions');
/*
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
la consola del navegador.
*/
console.log('Exercise 6-a');

function suma(x1, x2) {
    var result = x1 + x2;
    console.log('The result of the sum is: ' + result);
}
suma(8, 'dog')

/*
b. A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.
*/

console.log('Exercise 6-b');

function validationSuma(x1, x2) {
    if (typeof(x1) != "number" || typeof(x2) != "number") {
        alert('Parameter error');
        return NaN;
    } else {
        return console.log(x1 + x2);
    }
}
validationSuma(8, 'dog');
validationSuma(4, 2); //undefined
validationSuma('m', '3'); 
validationSuma('+', 9);
validationSuma('6', 1);
validationSuma(6, 1);

/*
c. Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.
*/
console.log('Exercise 6-c');
function validateInteger(number) {
    return Number.isInteger(number)
}

console.log(validateInteger(8));

/*
d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).
*/
console.log('Exercise 6-d');

function Suma(x1, x2) {
    if (typeof(x1) !== "number" || typeof(x2) !== "number") {
        alert('Parameter error');
        return NaN;
    } 
    if (validateInteger(x1)== false) {
        alert('Parameter error 1' + Math.round(x1));
    }
    if (validateInteger(x1)== false) {
        alert('Parameter error 2 ' + Math.round(x2))
    } else {
        return console.log(x1 + x2);
    }
}

console.log(Suma(5.5, 5));

/*
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual
*/
console.log('Exercise 6-e');

function Suma(x1, x2) {
    if (typeof(x1) !== "number" || typeof(x2) !== "number") {
        alert('Parameter error');
        return NaN;
    } else {
        return validatenext(x1,x2)
    }
} 
function validatenext(x1,x2) { 
    if (validateInteger(x1) && validateInteger(x2)) {
        return x1+x2;
    } else {
        alert('Parameter error x ')
        return Math.round(x1 + x2);
    }        
}
console.log(Suma(6, 3));