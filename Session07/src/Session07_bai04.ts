abstract class Person{
    name:string;
    displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
    constructor(name: string) {
        this.name = name;
    }
}
class Student extends Person {
    id:string;
    displayInfo(): void {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }
}
class Teacher extends Person {
    subject:string;
    displayInfo(): void {
        super.displayInfo();
        console.log(`Subject: ${this.subject}`);
    }
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
}
let b = new Student("John Doe", "S12345");
b.displayInfo();
let c = new Teacher("Jane Smith", "Mathematics");
c.displayInfo();
