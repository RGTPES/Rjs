"use strict";
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`Vehicle Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }
}
let moto = new Vehicle("Wave Alpha", 2020, "Honda");
let car = new Vehicle("Mazda CX-5", 2021, "Mazda");
moto.printInfo();
car.printInfo();
