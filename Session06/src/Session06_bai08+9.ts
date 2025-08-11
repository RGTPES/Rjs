class Book {
    id: number | string;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number | string, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    id: number | string;
    name: string;
    contact: string;
    books: Book[];
    status: string;

    constructor(id: number | string, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.books = [];
    }
}

class LendedBook {
    memberId: number | string;
    bookId: number | string;
    dueDate: Date;

    constructor(memberId: number | string, bookId: number | string, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    books: Book[];
    members: Member[];
    lendedBooks: LendedBook[];

    constructor() {
        this.books = [];
        this.members = [];
        this.lendedBooks = [];
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    addMember(member: Member) {
        this.members.push(member);
    }
    blockMember(memberId: number | string) {
        const member = this.members.find(m => m.id === memberId);
        if (member) {
            member.status != "blocked";
            member.status = "blocked";
        } else {
            console.log("Member not found.");
        }
    }
    showMembers() {
        console.log("Danh sach thanh vien trong thu vien:");
        this.members.forEach(m => {
            console.log(`${m.id} - ${m.name} | Trang thai: ${m.status}`);
        });
    }

    showBooks() {
        console.log("Danh sach sach trong thu vien:");
        this.books.forEach(b => {
            console.log(`${b.id} - ${b.title} (${b.author}) | So luong: ${b.stock} | Trang thai: ${b.status}`);
        });
    }

    lendBook(memberId: number | string, bookId: number | string, dueDate: Date) {
        const book = this.books.find(b => b.id === bookId);
        const member = this.members.find(m => m.id === memberId);

        if (book && member && book.stock > 0) {
            const lendedBook = new LendedBook(memberId, bookId, dueDate);
            this.lendedBooks.push(lendedBook);
            book.stock--;
            member.books.push(book);
            console.log(`Da cho muon sach "${book.title}" cho ${member.name}`);
        } else {
            console.log("Khong the cho muon sach.");
        }
    }
}
    
const library = new Library();

const book1 = new Book(1, "TS", "Nguyen Van A", 5, "Con san");
const book2 = new Book(2, "JAVA", "Tran Van B", 3, "Con san");

library.addBook(book1);
library.addBook(book2);

library.showBooks();
