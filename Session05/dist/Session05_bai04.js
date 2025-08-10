"use strict";
class Vehiclee {
    name;
    year;
    company;
    id;
    constructor(name, year, company, id = "V001") {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`Vehicle Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
        console.log(`ID: ${this.id}`);
    }
}
let motos = new Vehiclee("Wave Alpha", 2020, "Honda");
let cars = new Vehiclee("Mazda CX-5", 2021, "Mazda");
motos.printInfo();
cars.printInfo();
