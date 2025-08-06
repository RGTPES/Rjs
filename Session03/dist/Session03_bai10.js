"use strict";
const sent = "hello world apple banana orange pumpkin cucumber";
const words = sent.split(" ");
const hasUniqueChars = (word) => {
    const Seen = [];
    for (let char of word) {
        if (Seen.includes(char)) {
            return false;
        }
        Seen.push(char);
    }
    return true;
};
let longestWord = "";
for (let word of words) {
    if (hasUniqueChars(word) && word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord);
