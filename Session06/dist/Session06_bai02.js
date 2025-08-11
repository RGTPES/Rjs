"use strict";
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
}
class PartimeJob extends Job {
    workingHours;
    constructor(type, workingHours) {
        super(type);
        this.workingHours = workingHours;
    }
    PrintType() {
        console.log("Part-time Job");
    }
    CalculateSalary() {
        console.log(this.workingHours * 30);
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    PrintType() {
        console.log("Full-time Job");
    }
    CalculateSalary() {
        console.log(`10000000`);
    }
}
