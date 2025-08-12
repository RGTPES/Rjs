"use strict";
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(factor) {
        this.speed -= factor;
    }
    speedUp(factor) {
        this.speed += factor;
    }
    showSpeed() {
        console.log(`Vehicle Speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const a = new Bicycle("Mountain Bike", 15, "B001", "21-speed");
a.showSpeed();
a.speedUp(5);
a.showSpeed();
a.slowDown(3);
a.showSpeed();
