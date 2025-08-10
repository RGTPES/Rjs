class Student {
    public id: string
    public age: number
    public email: string
    constructor(id: string, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Age: ${this.age}`);
        console.log(`Email: ${this.email}`);
    }
}
let student1 = new Student("S001", 20, "student1@example.com");
let student2 = new Student("S002", 22, "student2@example.com");
let CLASS: Student[] = [student1, student2];

CLASS.forEach(student => {
    student.printInfo();
});
