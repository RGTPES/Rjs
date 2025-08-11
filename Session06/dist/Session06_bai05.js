"use strict";
class Vehicle {
    speed;
    constructor() {
        this.speed = 0;
    }
    speedUp() {
        this.speed += 10;
        console.log(`Speeding up: ${this.speed}`);
    }
    speedDown() {
        this.speed -= 10;
        console.log("Slowing down");
    }
    stop() {
        this.speed = 0;
        console.log("Vehicle stopped");
    }
}
