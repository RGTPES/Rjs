class Vehicle{
    public name: string;
    public year: number;
    public company:string;
    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo(): void {
        console.log(`Vehicle Name: ${this.name}`);
        console.log(`Year: ${this.year}`);
        console.log(`Company: ${this.company}`);
    }

}
let moto = new Vehicle("Wave Alpha", 2020, "Honda");
let car = new Vehicle("Mazda CX-5", 2021, "Mazda");
moto.printInfo();
car.printInfo();