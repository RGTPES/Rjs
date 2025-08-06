const total = (num1: any, num2: any): number => {
    if(typeof num1 ==="string" || typeof num2 === "string") {
        try{
            return Number(num1) + Number(num2);
        }catch(e) {
            console.error("Error: ", e);
        }
    }
    return num1 + num2;
}
const Difference = (num1: any, num2: any): number => {
    if(typeof num1 ==="string" || typeof num2 === "string") {
        try{
            return Number(num1) - Number(num2);
        }catch(e) {
            console.error("Error: ", e);
        }
    }
    return num1 - num2;
}
const Product = (num1: any, num2: any): number => {
    if(typeof num1 ==="string" || typeof num2 === "string") {
        try{
            return Number(num1) * Number(num2);
        }catch(e) {
            console.error("Error: ", e);
        }
    }
    return num1 * num2;
}
const Quotient = (num1: any, num2: any): number => {
    if(typeof num1 ==="string" || typeof num2 === "string") {
        try{
            return Number(num1) /   Number(num2);
        }catch(e) {
            console.error("Error: ", e);
        }
    }
    return num1 / num2;
}

let a = total("10", "20");
console.log(a);
let b = Difference("10", "20");
console.log(b);
let c = Product("10", "20");
console.log(c);
let d = Quotient("10", "20");
console.log(d);
