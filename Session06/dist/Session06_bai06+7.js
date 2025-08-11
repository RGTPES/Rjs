"use strict";
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
class ClassRoom {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Danh sách học sinh:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.name}`);
        });
    }
    filterStudentsById(id) {
        return this.students.filter(student => student.getId() === id);
    }
    addStudentInClassRoom(allStudents, count) {
        for (let i = 0; i < count && allStudents.length > 0; i++) {
            const student = allStudents.shift();
            if (student) {
                this.addStudent(student);
            }
        }
    }
    removeStudent(student) {
        this.students = this.students.filter(s => s !== student);
        AllStudents.push(student);
    }
    editStudent(student, newName) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students[index].name = newName;
        }
    }
}
const AllStudents = [
    new Student(1, "Alice"),
    new Student(2, "Bob"),
    new Student(3, "Charlie"),
    new Student(4, "David"),
    new Student(5, "Eve"),
    new Student(6, "Frank")
];
const classRoom1 = new ClassRoom();
const classRoom2 = new ClassRoom();
classRoom1.addStudentInClassRoom(AllStudents, 3);
classRoom2.addStudentInClassRoom(AllStudents, 3);
console.log("1");
classRoom1.showStudents();
console.log("2");
classRoom2.showStudents();
console.log(AllStudents);
classRoom1.removeStudent(new Student(1, "Alice"));
classRoom1.showStudents();
