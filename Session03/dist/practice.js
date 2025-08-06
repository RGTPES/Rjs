"use strict";
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const LogMovement = (direction) => {
    return `MOVING ${direction}`;
};
const setMode = (mode) => {
    return `System set  to ${mode} mode`;
};
const processInput = (input) => {
    if (typeof input == "string") {
        console.log(`Input Length ${input.length}`);
    }
    else {
        console.log("Input: ", input);
    }
};
const validateInput = (input) => {
    if (typeof input === "number") {
        console.log(`Received input (any): ${input}`);
    }
    else {
        console.log("Invalid input type: ");
    }
};
const crash = (message) => {
    throw new Error(message);
    //     try{
    // }catch(e){
    //  console.log(message);
    // }
};
setMode(SystemMode.AUTO);
LogMovement("forward");
processInput("test");
try {
    crash("This is a crash message");
}
catch (e) {
    console.log(e);
}
