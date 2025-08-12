class Vehicle{
    protected name:string;
    protected speed:number;
    protected id: string;
    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(factor: number): void {
        this.speed -= factor;
    }
    speedUp(factor: number): void {
        this.speed += factor;
    }
    showSpeed(): void {
        console.log(`Vehicle Speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    private gear:string;
    constructor(name: string, speed: number, id: string, gear: string) {
        super(name, speed, id);
        this.gear = gear;
    }

}
const a = new Bicycle("Mountain Bike", 15, "B001", "21-speed");
a.showSpeed();
a.speedUp(5);
a.showSpeed();
a.slowDown(3);
a.showSpeed();
