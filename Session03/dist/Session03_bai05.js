"use strict";
const firstName = "john";
const lastName = "doe";
if (firstName.startsWith("j") && lastName.startsWith("d")) {
    const fullname = firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
    console.log(fullname);
}
else {
    const fullname = firstName + " " + lastName;
    console.log(fullname);
}
