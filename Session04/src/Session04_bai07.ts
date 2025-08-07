const isAllNumbers = (num: string): boolean => {
    return num.length > 0 && num.split("").every((char: string) => {
        return !isNaN(Number(char));
    });
}

const isPrime = (n: number): boolean => {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const processInput = (input: string | number | boolean): void => {
    if (typeof input === "string") {
        if (isAllNumbers(input)) {
            const num = Number(input);
            console.log(num ** 2);
        } else {
            const letters = input.match(/[a-zA-Z]/g);
            console.log(`${letters ? letters.length : 0} ky tu chu cai`);
        }
    } else if (typeof input === "number") {
        console.log(isPrime(input) ? "La so nguyen to" : "Khong phai so nguyen to");
    } else if (typeof input === "boolean") {
        console.log(input ? "Gia tri la true - tien hanh xu ly" : "Gia tri la false - dung xu ly");
    }
}
