"use strict";
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    books;
    status;
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.books = [];
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books;
    members;
    lendedBooks;
    constructor() {
        this.books = [];
        this.members = [];
        this.lendedBooks = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    blockMember(memberId) {
        const member = this.members.find(m => m.id === memberId);
        if (member) {
            member.status != "blocked";
            member.status = "blocked";
        }
        else {
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
    lendBook(memberId, bookId, dueDate) {
        const book = this.books.find(b => b.id === bookId);
        const member = this.members.find(m => m.id === memberId);
        if (book && member && book.stock > 0) {
            const lendedBook = new LendedBook(memberId, bookId, dueDate);
            this.lendedBooks.push(lendedBook);
            book.stock--;
            member.books.push(book);
            console.log(`Da cho muon sach "${book.title}" cho ${member.name}`);
        }
        else {
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
