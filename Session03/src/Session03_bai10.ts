const sent: string = "hello world apple banana orange pumpkin cucumber";
const words: string[] = sent.split(" ");

const hasUniqueChars = (word: string): boolean => {
    const Seen: string[] = [];
    for (let char of word) {
        if (Seen.includes(char)) {
            return false;
        }
        Seen.push(char);
    }
    return true;
}

let longestWord: string = "";

for (let word of words) {
    if (hasUniqueChars(word) && word.length > longestWord.length) {
        longestWord = word;
    }
}

console.log(longestWord);
