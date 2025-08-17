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
    getDetails() {
        return `flightNumber: ${this.flightNumber},origin: ${this.origin} , destination: ${this.destination} , departure: ${this.departureTime} ,cap: ${this.capacity} , bookedSeats: ${this.bookedSeats}`
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
    constructor(bookingId: number, passenger: Passenger, flight: Flight, numberOfTickets: number, totalCost: number) {
        this.bookingId = bookingId;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = totalCost;

    }
    getBookingDetails(): string {
        return `ID: ${this.bookingId}, passenger: ${this.passenger.getDetails()}, flight: ${this.flight.getDetails()}, numberOfTickets: ${this.numberOfTickets},totalCost: ${this.totalCost}`;

    }


}
class GenericRepository<T> {
    private items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
    getAll(): T[] {
        this.items.forEach(a => console.log(a));
        return this.items;

    }
    findIndex(predicate: (item: T) => boolean): number {
        return this.items.findIndex(predicate);
    }
    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
    remove(predicate: (item: T) => boolean): void {
        this.items = this.items.filter(item => !predicate(item));
    }

}
class AirlineManager {
    private flightRepo: GenericRepository<Flight>;
    private passengerRepo: GenericRepository<Passenger>;
    private bookingRepo: GenericRepository<Booking>;
    constructor( flightRepo: GenericRepository<Flight>,passengerRepo: GenericRepository<Passenger>,bookingRepo: GenericRepository<Booking>){
        this.flightRepo = flightRepo;
        this.passengerRepo = passengerRepo;
        this.bookingRepo = bookingRepo;
    }
    addFlight(flight:Flight):void{
        this.flightRepo.add(flight);
    }
   addPassenger(name: string, passportNumber: string): void {
    const passengerId = this.passengerRepo.getAll().length + 1; 
    const passenger = new Passenger(passengerId, name, passportNumber);
    this.passengerRepo.add(passenger);
}
}