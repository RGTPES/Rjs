class Book {
    private id: string;
    private title: string;
    private author: string;

    constructor(id: string, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getID(): string {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }

    setTitle(newTitle: string): void {
        this.title = newTitle;
    }
    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }   

    listBooks(): void {
        console.log("Books in the library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getTitle()} by ${book.getAuthor()}`);
        });
    }

    fixBook(id: string, newTitle: string, newAuthor: string): Book | undefined {
        const foundBook = this.books.find(book => book.getID() === id);
        if (foundBook) {
            foundBook.setTitle(newTitle);
            foundBook.setAuthor(newAuthor);
        }
        return foundBook;
    }

    searchBook(id: string): Book | undefined {
        return this.books.find(book => book.getID() === id);
    }

    deleteBook(id: string): void {
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
