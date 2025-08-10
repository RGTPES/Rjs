"use strict";
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getID() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        console.log("Books in the library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} by ${book.getAuthor()}`);
        });
    }
    fixBook(id, newTitle, newAuthor) {
        const foundBook = this.books.find(book => book.getID() === id);
        if (foundBook) {
            foundBook.setTitle(newTitle);
            foundBook.setAuthor(newAuthor);
        }
        return foundBook;
    }
    searchBook(id) {
        return this.books.find(book => book.getID() === id);
    }
    deleteBook(id) {
        this.books = this.books.filter(book => book.getID() !== id);
    }
}
const library = new Library();
library.addBook(new Book("1", "To Kill a Mockingbird", "Harper Lee"));
library.addBook(new Book("2", "1984", "George Orwell"));
library.addBook(new Book("3", "The Great Gatsby", "F. Scott Fitzgerald"));
library.addBook(new Book("4", "Moby Dick", "Herman Melville"));
library.addBook(new Book("5", "War and Peace", "Leo Tolstoy"));
library.listBooks();
library.fixBook("3", "The Great Gatsby - Updated", "Fitzgerald Updated");
library.listBooks();
library.deleteBook("2");
