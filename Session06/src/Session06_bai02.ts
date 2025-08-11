abstract class Job{
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    abstract PrintType(): void;
    abstract CalculateSalary(): void;


}
class PartimeJob extends Job{
    workingHours: number;
    constructor(type: string, workingHours: number) {
        super(type);
        this.workingHours = workingHours;
    }
    PrintType(): void {
        console.log("Part-time Job");
    }
    CalculateSalary(): void {
        console.log(this.workingHours * 30);
    }
}
class FulltimeJob extends Job{
    constructor(type: string) {
        super(type);
    }
    PrintType(): void {
        console.log("Full-time Job");
    }
    CalculateSalary():void {
        console.log(`10000000`);
    }

}

