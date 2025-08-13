"use strict";
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    book = [];
    addBook(book) {
        this.book.push(book);
    }
    getBookByID(id) {
        return this.book.find((book) => book.id === id);
    }
    deleteBookById(id) {
        this.book = this.book.filter((book) => book.id !== id);
    }
    updateBook(id, newBook) {
        const index = this.book.findIndex((book) => book.id === id);
        if (index !== -1) {
            this.book[index] = { ...newBook, id };
        }
    }
    listBook() {
        return this.book;
    }
    findBookByTitleOrAuthor(search) {
        return this.book.filter((book) => book.title?.toLowerCase().includes(search.toLowerCase()) || book.author?.toLowerCase().includes(search.toLowerCase()));
    }
    findBookByYear(year) {
        return this.book.filter((book) => book.year === year);
    }
}
const library = new Library();
const book1 = new Book(1, "sach 1", "a", 2020);
const book2 = new Book(2, "sach 2", "a", 2020);
const book3 = new Book(3, "sach 3", "a", 2020);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.listBook());
