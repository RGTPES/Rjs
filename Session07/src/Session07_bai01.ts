class Employee {
    name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }


}
class Manager extends Employee {
    teamSize: string;

    constructor(name: string, company: string, phone: number, teamSize: string) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}