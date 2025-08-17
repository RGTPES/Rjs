// index.ts - Quản lý đặt vé xem phim dùng prompt/alert
let nextAudienceId = 1;
let nextMovieId = 1;
let nextBookingId = 1;

class Audience {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public id: number = nextAudienceId++
  ) {}
  getDetails(): string {
    return `Audience ID: ${this.id} | Name: ${this.name} | Email: ${this.email} | Phone: ${this.phone}`;
  }
}

abstract class Movie {
  constructor(
    public title: string,
    public genre: string,
    public ticketPrice: number,
    public isShowing: boolean = true,
    public id: number = nextMovieId++
  ) {}
  startShow() { this.isShowing = true; }
  stopShow() { this.isShowing = false; }
  abstract calculateTicketCost(quantity: number): number;
  abstract getSpecialOffers(): string[];
  abstract getMovieInfo(): string;
  getBasicInfo(): string {
    return `Movie ID: ${this.id} | ${this.title} (${this.genre}) | Price: ${this.ticketPrice} | Showing: ${this.isShowing}`;
  }
}

class ActionMovie extends Movie {
  calculateTicketCost(q: number) { return this.ticketPrice * q; }
  getSpecialOffers() { return ["Miễn phí bắp rang", "Tặng poster"]; }
  getMovieInfo() { return "Phim hành động gay cấn, kỹ xảo hoành tráng"; }
}
class ComedyMovie extends Movie {
  calculateTicketCost(q: number) {
    let base = this.ticketPrice * q;
    return q > 4 ? base * 0.9 : base;
  }
  getSpecialOffers() { return ["Giảm 10% cho nhóm trên 4 người"]; }
  getMovieInfo() { return "Phim hài nhẹ nhàng, vui nhộn"; }
}
class AnimationMovie extends Movie {
  calculateTicketCost(q: number) { return this.ticketPrice * q; }
  getSpecialOffers() { return ["Giảm giá cho trẻ em dưới 12 tuổi"]; }
  getMovieInfo() { return "Phim hoạt hình với hình ảnh sống động"; }
}

class TicketBooking {
  totalPrice: number;
  constructor(
    public audience: Audience,
    public movie: Movie,
    public quantity: number,
    public bookingId: number = nextBookingId++
  ) {
    this.totalPrice = movie.calculateTicketCost(quantity);
  }
  getDetails(): string {
    return `Booking ID: ${this.bookingId} | Audience: ${this.audience.name} | Movie: ${this.movie.title} | Qty: ${this.quantity} | Total: ${this.totalPrice}`;
  }
}

class Cinema {
  movies: Movie[] = [];
  audiences: Audience[] = [];
  bookings: TicketBooking[] = [];

  addMovie(m: Movie) { this.movies.push(m); }
  addAudience(n: string, e: string, p: string) {
    let a = new Audience(n, e, p);
    this.audiences.push(a);
    return a;
  }
  bookTickets(aid: number, mid: number, qty: number) {
    let a = this.audiences.find(x => x.id === aid);
    let m = this.movies.find(x => x.id === mid);
    if (!a || !m || !m.isShowing) return null;
    let b = new TicketBooking(a, m, qty);
    this.bookings.push(b);
    return b;
  }
  cancelMovie(id: number) {
    let m = this.movies.find(x => x.id === id);
    if (m) m.stopShow();
  }
  listShowingMovies() {
    return this.movies.filter(m => m.isShowing).map(m => m.getBasicInfo()).join("\n");
  }
  listAudienceBookings(aid: number) {
    return this.bookings.filter(b => b.audience.id === aid).map(b => b.getDetails()).join("\n");
  }
  calculateTotalRevenue() {
    return this.bookings.reduce((s, b) => s + b.totalPrice, 0);
  }
  getMovieGenreCount() {
    return this.movies.reduce((acc: any, m) => {
      acc[m.genre] = (acc[m.genre] || 0) + 1;
      return acc;
    }, {});
  }
  getMovieSpecialOffers(mid: number) {
    let m = this.movies.find(x => x.id === mid);
    return m ? m.getSpecialOffers().join("\n") : "";
  }
}

function seed(cinema: Cinema) {
  cinema.addAudience("Nguyen Van A", "a@ex.com", "0123");
  cinema.addMovie(new ActionMovie("Fast & Furious", "Action", 100000));
  cinema.addMovie(new ComedyMovie("Jokes Night", "Comedy", 80000));
  cinema.addMovie(new AnimationMovie("Little Heroes", "Animation", 60000));
}

function main() {
  const c = new Cinema();
  seed(c);
  while (true) {
    let ch = prompt(
`=== MENU ===
1. Thêm khán giả
2. Thêm phim
3. Đặt vé
4. Ngừng chiếu phim
5. Hiển thị phim đang chiếu
6. Hiển thị vé của khán giả
7. Tính doanh thu
8. Đếm phim theo thể loại
9. Tìm kiếm theo ID
10. Ưu đãi phim
11. Thoát
Chọn:`);
    if (ch === null) break;
    switch (ch) {
      case "1":
        let name = prompt("Tên:");
        let email = prompt("Email:");
        let phone = prompt("Phone:");
        if (name && email && phone) alert("Đã thêm: " + c.addAudience(name, email, phone).getDetails());
        break;
      case "2":
        let t = prompt("Tên phim:");
        let g = prompt("Thể loại (action/comedy/animation):")?.toLowerCase();
        let p = parseFloat(prompt("Giá vé:") || "0");
        if (t && p > 0) {
          if (g === "action") c.addMovie(new ActionMovie(t, "Action", p));
          else if (g === "comedy") c.addMovie(new ComedyMovie(t, "Comedy", p));
          else if (g === "animation") c.addMovie(new AnimationMovie(t, "Animation", p));
          alert("Đã thêm phim");
        }
        break;
      case "3":
        let aid = parseInt(prompt("Audience ID:") || "0");
        let mid = parseInt(prompt("Movie ID:") || "0");
        let qty = parseInt(prompt("Số lượng vé:") || "0");
        let b = c.bookTickets(aid, mid, qty);
        alert(b ? "Đặt vé thành công:\n" + b.getDetails() : "Đặt vé thất bại");
        break;
      case "4":
        let cmid = parseInt(prompt("Movie ID cần ngừng chiếu:") || "0");
        c.cancelMovie(cmid);
        break;
      case "5":
        alert(c.listShowingMovies() || "Không có phim");
        break;
      case "6":
        let aid2 = parseInt(prompt("Audience ID:") || "0");
        alert(c.listAudienceBookings(aid2) || "Không có vé");
        break;
      case "7":
        alert("Doanh thu: " + c.calculateTotalRevenue());
        break;
      case "8":
        alert(JSON.stringify(c.getMovieGenreCount()));
        break;
      case "9":
        let type = prompt("Tìm 1-Movie 2-Audience 3-Booking:");
        let id = parseInt(prompt("ID:") || "0");
        if (type === "1") alert(c.movies.find(m=>m.id===id)?.getBasicInfo() || "Không tìm thấy");
        if (type === "2") alert(c.audiences.find(a=>a.id===id)?.getDetails() || "Không tìm thấy");
        if (type === "3") alert(c.bookings.find(b=>b.bookingId===id)?.getDetails() || "Không tìm thấy");
        break;
      case "10":
        let mid2 = parseInt(prompt("Movie ID:") || "0");
        alert(c.getMovieSpecialOffers(mid2) || "Không tìm thấy");
        break;
      case "11":
        return;
    }
  }
}

main();
