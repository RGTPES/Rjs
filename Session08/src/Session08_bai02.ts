const a:boolean = true;
function printMessage<T extends boolean>(flag: T): void {
    if (flag) {
        console.log("Xin chao");
    } else {
        console.log("Tam biet");
    }
}
printMessage(a);