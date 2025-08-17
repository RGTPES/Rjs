// // airline.ts

// class Passenger {
//     static nextId = 1;
//     passengerId: number;
//     name: string;
//     passportNumber: string;
//     constructor(name: string, passportNumber: string) {
//         this.passengerId = Passenger.nextId++;
//         this.name = name;
//         this.passportNumber = passportNumber;
//     }
//     getDetails(): string {
//         return `ID: ${this.passengerId} - ${this.name} - Passport: ${this.passportNumber}`;
//     }
// }

// abstract class Flight {
//     flightNumber: string;
//     origin: string;
//     destination: string;
//     departureTime: Date;
//     capacity: number;
//     bookedSeats: number;
//     constructor(flightNumber: string, origin: string, destination: string, departureTime: Date, capacity: number) {
//         this.flightNumber = flightNumber;
//         this.origin = origin;
//         this.destination = destination;
//         this.departureTime = departureTime;
//         this.capacity = capacity;
//         this.bookedSeats = 0;
//     }
//     bookSeat(): boolean {
//         if (this.isFull()) return false;
//         this.bookedSeats++;
//         return true;
//     }
//     isFull(): boolean {
//         return this.bookedSeats >= this.capacity;
//     }
//     abstract calculateBaggageFee(weight: number): number;
// }

// class DomesticFlight extends Flight {
//     calculateBaggageFee(weight: number): number {
//         return weight * 50000; // VND
//     }
// }

// class InternationalFlight extends Flight {
//     calculateBaggageFee(weight: number): number {
//         return weight * 10; // USD, bạn có thể thêm logic đổi ra VND nếu muốn
//     }
// }

// class Booking {
//     static nextId = 1;
//     bookingId: number;
//     passenger: Passenger;
//     flight: Flight;
//     numberOfTickets: number;
//     totalCost: number;
//     constructor(passenger: Passenger, flight: Flight, numberOfTickets: number) {
//         this.bookingId = Booking.nextId++;
//         this.passenger = passenger;
//         this.flight = flight;
//         this.numberOfTickets = numberOfTickets;
//         this.totalCost = numberOfTickets * 1000000; // giả sử mỗi vé 1 triệu VND
//     }
//     getBookingDetails(): string {
//         return `Booking ID: ${this.bookingId}\nPassenger: ${this.passenger.getDetails()}\nFlight: ${this.flight.flightNumber} - ${this.flight.origin} -> ${this.flight.destination}\nTickets: ${this.numberOfTickets}\nTotal: ${this.totalCost.toLocaleString()} VND`;
//     }
// }

// class GenericRepository<T> {
//     private items: T[] = [];
//     add(item: T): void { this.items.push(item); }
//     getAll(): T[] { return this.items; }
//     find(predicate: (item: T) => boolean): T | undefined { return this.items.find(predicate); }
//     findIndex(predicate: (item: T) => boolean): number { return this.items.findIndex(predicate); }
//     remove(predicate: (item: T) => boolean): void { this.items = this.items.filter(item => !predicate(item)); }
// }

// class AirlineManager {
//     private flightRepo = new GenericRepository<Flight>();
//     private passengerRepo = new GenericRepository<Passenger>();
//     private bookingRepo = new GenericRepository<Booking>();

//     addFlight(flight: Flight): void { this.flightRepo.add(flight); }
//     addPassenger(name: string, passportNumber: string): void { 
//         const passenger = new Passenger(name, passportNumber);
//         this.passengerRepo.add(passenger);
//     }

//     createBooking(passengerId: number, flightNumber: string, numberOfTickets: number): Booking | null {
//         const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
//         const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
//         if (!passenger || !flight) return null;
//         if (flight.bookedSeats + numberOfTickets > flight.capacity) return null;

//         for (let i = 0; i < numberOfTickets; i++) flight.bookSeat();
//         const booking = new Booking(passenger, flight, numberOfTickets);
//         this.bookingRepo.add(booking);
//         return booking;
//     }

//     cancelBooking(bookingId: number): void {
//         const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
//         if (!booking) return;
//         // hoàn ghế
//         for (let i = 0; i < booking.numberOfTickets; i++) booking.flight.bookedSeats--;
//         this.bookingRepo.remove(b => b.bookingId === bookingId);
//     }

//     listAvailableFlights(origin: string, destination: string): void {
//         const flights = this.flightRepo.getAll().filter(f => f.origin === origin && f.destination === destination && !f.isFull());
//         flights.forEach(f => console.log(`${f.flightNumber}: ${f.origin} -> ${f.destination}, Departure: ${f.departureTime}, Seats Left: ${f.capacity - f.bookedSeats}`));
//     }

//     listBookingsByPassenger(passengerId: number): void {
//         const bookings = this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
//         bookings.forEach(b => console.log(b.getBookingDetails()));
//     }

//     calculateTotalRevenue(): number {
//         return this.bookingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
//     }

//     countFlightsByType(): void {
//         const counts = this.flightRepo.getAll().reduce((acc, f) => {
//             const type = f instanceof DomesticFlight ? 'Domestic' : 'International';
//             acc[type] = (acc[type] || 0) + 1;
//             return acc;
//         }, {} as Record<string, number>);
//         console.log(counts);
//     }

//     updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
//         const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
//         if (flight) flight.departureTime = newDepartureTime;
//     }

//     getFlightPassengerList(flightNumber: string): void {
//         const list = this.bookingRepo.getAll()
//             .filter(b => b.flight.flightNumber === flightNumber)
//             .map(b => b.passenger.getDetails());
//         console.log(list);
//     }
// }

// // === Menu ===
// const manager = new AirlineManager();

// while(true){
//     const choice = Number(prompt(`1. Thêm hành khách
// 2. Thêm chuyến bay
// 3. Tạo giao dịch đặt vé
// 4. Hủy giao dịch đặt vé
// 5. Hiển thị chuyến bay còn chỗ
// 6. Hiển thị vé của hành khách
// 7. Tính tổng doanh thu
// 8. Đếm số chuyến bay
// 9. Cập nhật giờ bay
// 10. Xem danh sách hành khách chuyến bay
// 0. Thoát`));

//     if (Number.isNaN(choice)) continue;
//     if (choice === 0) break;

//     switch(choice){
//         case 1:
//             const pname = prompt("Tên hành khách:")||"";
//             const ppassport = prompt("Số hộ chiếu:")||"";
//             manager.addPassenger(pname, ppassport);
//             console.log("Đã thêm hành khách!");
//             break;
//         case 2:
//             const ftype = Number(prompt("1. Nội địa\n2. Quốc tế"));
//             const fnum = prompt("Số hiệu chuyến bay:")||"";
//             const origin = prompt("Điểm đi:")||"";
//             const dest = prompt("Điểm đến:")||"";
//             const depStr = prompt("Ngày giờ khởi hành (yyyy-mm-dd hh:mm):")||"";
//             const depTime = new Date(depStr);
//             const cap = Number(prompt("Sức chứa:"));
//             if(ftype===1) manager.addFlight(new DomesticFlight(fnum,origin,dest,depTime,cap));
//             else manager.addFlight(new InternationalFlight(fnum,origin,dest,depTime,cap));
//             console.log("Đã thêm chuyến bay!");
//             break;
//         case 3:
//             const pid = Number(prompt("ID hành khách:"));
//             const fid = prompt("Số hiệu chuyến bay:")||"";
//             const numTicket = Number(prompt("Số lượng vé:"));
//             const booking = manager.createBooking(pid,fid,numTicket);
//             if(booking) console.log("Tạo vé thành công!\n"+booking.getBookingDetails());
//             else console.log("Tạo vé thất bại!");
//             break;
//         case 4:
//             const bid = Number(prompt("ID giao dịch:"));
//             manager.cancelBooking(bid);
//             console.log("Đã hủy nếu tồn tại");
//             break;
//         case 5:
//             const ori = prompt("Điểm đi:")||"";
//             const des = prompt("Điểm đến:")||"";
//             manager.listAvailableFlights(ori,des);
//             break;
//         case 6:
//             const bpassengerId = Number(prompt("ID hành khách:"));
//             manager.listBookingsByPassenger(bpassengerId);
//             break;
//         case 7:
//             console.log("Tổng doanh thu: "+manager.calculateTotalRevenue().toLocaleString()+" VND");
//             break;
//         case 8:
//             manager.countFlightsByType();
//             break;
//         case 9:
//             const fnumUpdate = prompt("Số hiệu chuyến bay:")||"";
//             const newTimeStr = prompt("Ngày giờ mới (yyyy-mm-dd hh:mm):")||"";
//             manager.updateFlightTime(fnumUpdate,new Date(newTimeStr));
//             console.log("Cập nhật giờ bay thành công!");
//             break;
//         case 10:
//             const flnum = prompt("Số hiệu chuyến bay:")||"";
//             manager.getFlightPassengerList(flnum);
//             break;
//     }
// }
