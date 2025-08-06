"use strict";
const input = "banana";
let output = "";
let Seen = [];
for (let char of input) {
    if (!Seen.includes(char)) {
        output += char;
        Seen.push(char);
    }
}
console.log(output);
