"use strict";
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
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
            console.log(`${index + 1}. ${book['title']} by ${book['author']}`);
        });
    }
}
const book1 = new Book("To Kill a Mockingbird", "Harper Lee");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book4 = new Book("Moby Dick", "Herman Melville");
const book5 = new Book("War and Peace", "Leo Tolstoy");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();
