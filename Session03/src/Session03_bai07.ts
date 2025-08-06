const input: string = "banana";
let output : string = "";
let Seen : string[] = [];
for(let char of input) {
    if(!Seen.includes(char)) {
        output += char;
        Seen.push(char);
    }
}
console.log(output);
