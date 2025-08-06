enum SystemMode {
    AUTO = "AUTO",
    MANUAL = "MANUAL",
}


type Direction = "left" | "right" | "forward" | "backward";
const LogMovement = (direction: Direction): string => {
    return `MOVING ${direction}`;
}
const setMode = (mode: SystemMode): string => {
    return `System set  to ${mode} mode`;
}
const processInput = (input: any): any => {
    if (typeof input == "string") {
        console.log(`Input Length ${input.length}`);
    } else {
        console.log("Input: ", input);
    }
}

const validateInput = (input: unknown) => {
    if (typeof input === "number") {
        console.log(`Received input (any): ${input}`);
    } else {
        console.log("Invalid input type: ");
    }
}
const crash = (message: string): never => {
    throw new Error(message);
    //     try{

    // }catch(e){
    //  console.log(message);

    // }
}


setMode(SystemMode.AUTO);
LogMovement("forward");
processInput("test");
try {
    crash("This is a crash message");
} catch (e) {
    console.log(e);
}

