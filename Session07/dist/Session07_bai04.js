"use strict";
class Person {
    name;
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    id;
    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}
class Teacher extends Person {
    subject;
    displayInfo() {
        super.displayInfo();
        console.log(`Subject: ${this.subject}`);
    }
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}
let b = new Student("John Doe", "S12345");
b.displayInfo();
let c = new Teacher("Jane Smith", "Mathematics");
c.displayInfo();
