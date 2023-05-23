"use strict";
// Use Recursion to Create a Range of Numbers
// Utilice la recursividad para crear un rango de números
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    }
    else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
var ejemplo = rangeOfNumbers(1, 10);
console.log(ejemplo);
