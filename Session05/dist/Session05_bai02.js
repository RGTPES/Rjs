"use strict";
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}
let student1 = new Student("S001", 20, "student1@example.com");
let student2 = new Student("S002", 22, "student2@example.com");
let CLASS = [student1, student2];
CLASS.forEach(student => {
    student.printInfo();
});
