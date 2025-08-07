interface Person {
    name: string;
    age: number;
}
interface Employee {
    employeeId: number;
    department: string;
}
type StaffMember = Person & Employee;
const printfStaffMember = (staff: StaffMember): void => {
    console.log(`Name: ${staff.name}, Employee ID: ${staff.employeeId}- Department: ${staff.department}`);
}
printfStaffMember({
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
});