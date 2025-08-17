"use strict";
class Passenger {
    static autoId = 1;
    passengerId;
    name;
    passportNumber;
    constructor(name, passportNumber) {
        this.passengerId = Passenger.autoId++;
        this.name = name;
        this.passportNumber = passportNumber;
    }
    getDetails() {
        return `ID: ${this.passengerId}, Ten: ${this.name}, Ho chieu: ${this.passportNumber}`;
    }
}
class Flight {
    flightNumber;
    origin;
    destination;
    departureTime;
    capacity;
    bookedSeats = 0;
    constructor(flightNumber, origin, destination, departureTime, capacity) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
    }
    bookSeat() {
        if (this.bookedSeats < this.capacity) {
            this.bookedSeats++;
            return true;
        }
        return false;
    }
    isFull() {
        return this.bookedSeats >= this.capacity;
    }
}
class DomesticFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 50000;
    }
}
class InternationalFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 10;
    }
}
class Booking {
    static autoId = 1;
    bookingId;
    passenger;
    flight;
    numberOfTickets;
    totalCost;
    constructor(passenger, flight, numberOfTickets) {
        this.bookingId = Booking.autoId++;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = numberOfTickets * 100;
    }
    getBookingDetails() {
        return `BookingID: ${this.bookingId}, Hanh khach: ${this.passenger.name}, Chuyen bay: ${this.flight.flightNumber}, Ve: ${this.numberOfTickets}, Tong tien: ${this.totalCost}`;
    }
}
class GenericRepository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    find(predicate) {
        return this.items.find(predicate);
    }
    findIndex(predicate) {
        return this.items.findIndex(predicate);
    }
    remove(predicate) {
        this.items = this.items.filter(item => !predicate(item));
    }
}
class AirlineManager {
    flightRepo = new GenericRepository();
    passengerRepo = new GenericRepository();
    bookingRepo = new GenericRepository();
    addFlight(flight) {
        this.flightRepo.add(flight);
    }
    addPassenger(name, passportNumber) {
        let p = new Passenger(name, passportNumber);
        this.passengerRepo.add(p);
        alert("Them hanh khach thanh cong");
    }
    createBooking(passengerId, flightNumber, numberOfTickets) {
        let passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
        let flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (passenger && flight && !flight.isFull()) {
            for (let i = 0; i < numberOfTickets; i++) {
                if (!flight.bookSeat())
                    return null;
            }
            let booking = new Booking(passenger, flight, numberOfTickets);
            this.bookingRepo.add(booking);
            alert("Dat ve thanh cong");
            return booking;
        }
        alert("Khong the dat ve");
        return null;
    }
    cancelBooking(bookingId) {
        this.bookingRepo.remove(b => b.bookingId === bookingId);
        alert("Da huy booking " + bookingId);
    }
    listAvailableFlights(origin, destination) {
        let flights = this.flightRepo.getAll().filter(f => f.origin === origin && f.destination === destination && !f.isFull());
        console.log("Danh sach chuyen bay con cho:");
        flights.forEach(f => console.log(f.flightNumber, f.origin, "->", f.destination));
    }
    listBookingsByPassenger(passengerId) {
        let bookings = this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
        console.log("Danh sach ve cua hanh khach:");
        bookings.forEach(b => console.log(b.getBookingDetails()));
    }
    calculateTotalRevenue() {
        return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
    }
    countFlightsByType() {
        let result = this.flightRepo.getAll().reduce((acc, f) => {
            let type = f instanceof DomesticFlight ? "Noi dia" : "Quoc te";
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        console.log("Thong ke so luong chuyen bay:", result);
    }
    updateFlightTime(flightNumber, newDepartureTime) {
        let f = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (f) {
            f.departureTime = newDepartureTime;
            alert("Cap nhat gio bay thanh cong");
        }
    }
    getFlightPassengerList(flightNumber) {
        let bookings = this.bookingRepo.getAll().filter(b => b.flight.flightNumber === flightNumber);
        console.log("Danh sach hanh khach tren chuyen bay", flightNumber);
        bookings.forEach(b => console.log(b.passenger.getDetails()));
    }
}
let manager = new AirlineManager();
function showMenu() {
    let choice = prompt(`----- MENU -----
1. Them hanh khach moi
2. Them chuyen bay
3. Tao booking
4. Huy booking
5. Hien thi chuyen bay con cho
6. Hien thi ve cua hanh khach
7. Tinh tong doanh thu
8. Dem so luong chuyen bay
9. Cap nhat gio bay
10. Danh sach hanh khach cua chuyen bay
0. Thoat
Nhap lua chon:`);
    switch (choice) {
        case "1":
            let name = prompt("Nhap ten hanh khach:") || "";
            let passport = prompt("Nhap so ho chieu:") || "";
            manager.addPassenger(name, passport);
            break;
        case "2":
            let type = prompt("Loai chuyen bay (1 Noi dia, 2 Quoc te):");
            let fn = prompt("So hieu chuyen bay:") || "";
            let origin = prompt("Noi di:") || "";
            let dest = prompt("Noi den:") || "";
            let time = new Date(prompt("Thoi gian khoi hanh (yyyy-mm-dd):") || "");
            let cap = Number(prompt("Suc chua:") || "0");
            if (type === "1")
                manager.addFlight(new DomesticFlight(fn, origin, dest, time, cap));
            else
                manager.addFlight(new InternationalFlight(fn, origin, dest, time, cap));
            break;
        case "3":
            let pid = Number(prompt("Nhap ID hanh khach:") || "0");
            let fnum = prompt("Nhap so hieu chuyen bay:") || "";
            let tickets = Number(prompt("Nhap so luong ve:") || "1");
            manager.createBooking(pid, fnum, tickets);
            break;
        case "4":
            let bid = Number(prompt("Nhap ma booking:") || "0");
            manager.cancelBooking(bid);
            break;
        case "5":
            let o = prompt("Nhap noi di:") || "";
            let d = prompt("Nhap noi den:") || "";
            manager.listAvailableFlights(o, d);
            break;
        case "6":
            let pid2 = Number(prompt("Nhap ID hanh khach:") || "0");
            manager.listBookingsByPassenger(pid2);
            break;
        case "7":
            alert("Tong doanh thu: " + manager.calculateTotalRevenue());
            break;
        case "8":
            manager.countFlightsByType();
            break;
        case "9":
            let fn2 = prompt("Nhap so hieu chuyen bay:") || "";
            let newTime = new Date(prompt("Nhap thoi gian moi (yyyy-mm-dd):") || "");
            manager.updateFlightTime(fn2, newTime);
            break;
        case "10":
            let fn3 = prompt("Nhap so hieu chuyen bay:") || "";
            manager.getFlightPassengerList(fn3);
            break;
        case "0":
            alert("Thoat chuong trinh");
            return;
    }
    showMenu();
}
