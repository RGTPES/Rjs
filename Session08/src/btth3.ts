class Passenger {
    passengerId: number;
    name: string;
    passportNumber: string;
    constructor(passengerId: number, name: string, passportNumber: string) {
        this.passengerId = passengerId;
        this.name = name
        this.passportNumber = passportNumber;
    }
    getDetails(): string {
        return `ID: ${this.passengerId}, Name: ${this.name}, PassportNumber: ${this.passportNumber}`
    }
}
abstract class Flight {
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: Date;
    capacity: number;
    bookedSeats: number;
    constructor(flightNumber: string, origin: string, destination: string, departureTime: Date, capacity: number, bookedSeats: number) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
        this.bookedSeats = bookedSeats;
    }
    bookSeat(): number {
        return this.bookedSeats++;
    }
    isFull(): boolean {
        if (this.capacity === this.bookedSeats) {
            return true;
        } else {
            return false;
        }
    }
    abstract calculateBaggageFee(weight: number): number;


}
class DomesticFlight extends Flight {
    calculateBaggageFee(weight: number): number {
        return weight * 50000;
    }
}
class InternationalFlight extends Flight {
    calculateBaggageFee(weight: number): number {
        return weight * 250000;
    }
}
class Booking {
    bookingId: number;
    passenger: Passenger;
    flight: Flight;
    numberOfTickets: number;
    totalCost: number;
    constructor( bookingId: number,passenger: Passenger,flight: Flight,numberOfTickets: number,totalCost: number){
        this.bookingId = bookingId;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = totalCost;

    }
    getBookingDetails():string{
        return `ID: ${this.bookingId}, passenger: ${this.passenger}, flight: ${this.flight}, numberOfTickets: ${this.numberOfTickets},totalCost: ${this.totalCost}`;

    }


}
class GenericRepository<T>{
    private items:T[] = [];
    add(item:T):void{
        this.items.push(item);
    }
    getAll():T[]{
        this.items.forEach(a=>console.log(a));
        return this.items;
        
    }
    find(predicate:(item:T)=>boolean):T|undefined{
        return this.items.find(predicate);
    }
    
}