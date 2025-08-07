"use strict";
const printfStaffMember = (staff) => {
    console.log(`Name: ${staff.name}, Employee ID: ${staff.employeeId}- Department: ${staff.department}`);
};
printfStaffMember({
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
});
