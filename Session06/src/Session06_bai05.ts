interface changeSpeed{
    speedUp(): void;
    speedDown(): void;
    stop(): void;

}
class Vehicle implements changeSpeed {
    private speed: number;
    constructor() {
        this.speed = 0;
    }
    speedUp(): void {
        this.speed += 10;
        console.log(`Speeding up: ${this.speed}`);
    }
    speedDown(): void {
        this.speed -= 10;
        console.log("Slowing down");
    }
    stop(): void {
        this.speed = 0;
        console.log("Vehicle stopped");
    }
}