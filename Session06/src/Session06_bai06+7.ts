class Student {
    private id: number | string;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number | string {
        return this.id;
    }

    setId(id: number | string): void {
        this.id = id;
    }
}

class ClassRoom {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    showStudents(): void {
        console.log("Danh sách học sinh:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.name}`);
        });
    }

    filterStudentsById(id: number | string): Student[] {
        return this.students.filter(student => student.getId() === id);
    }

    addStudentInClassRoom(allStudents: Student[], count: number): void {
        for (let i = 0; i < count && allStudents.length > 0; i++) {
            const student = allStudents.shift(); 
            if (student) {
                this.addStudent(student);
            }
        }
    }
    removeStudent(student: Student): void {
        this.students = this.students.filter(s => s !== student);
        AllStudents.push(student);
    }
    editStudent(student: Student, newName: string): void {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students[index].name = newName;
        }
    }
}

const AllStudents: Student[] = [
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
