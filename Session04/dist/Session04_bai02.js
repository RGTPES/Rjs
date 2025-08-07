"use strict";
const number = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
const average = number.reduce((acc, curr) => acc + curr, 0) / number.length;
console.log(`Average: ${average.toFixed(2)}`);
