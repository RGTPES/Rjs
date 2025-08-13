class Book {
    id?: number;
    title?: string;
    author?: string;
    year?: number;
    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library<T> {
    private book: Array<T> = []
    addBook(book: T): void {
        this.book.push(book);

    }
    getBookByID(id: number): T | undefined {
        return this.book.find((book: T) => (book as Book).id === id)
    }
    deleteBookById(id:number) {
        this.book=this.book.filter((book:T)=>(book as Book).id !== id);
    }
    updateBook(id:number|string, newBook: T) {
        const index = this.book.findIndex((book:T)=>(book as Book).id=== id);
        if(index !== -1 ){
            this.book[index] ={...newBook,id};

        }
      
    }
    listBook():T[]{
        return this.book;
    }
    findBookByTitleOrAuthor(search:string) :T[]{
        return this.book.filter((book:T)=>(book as Book).title?.toLowerCase().includes(search.toLowerCase())||(book as Book).author?.toLowerCase().includes(search.toLowerCase())
    
    )
    }
    findBookByYear(year:number):T[]{
        return this.book.filter((book:T)=> (book as Book).year=== year)
    }

}
const library =new Library<Book>();
const book1 = new Book(1,"sach 1","a",2020);
const book2 = new Book(2,"sach 2","a",2020);
const book3 = new Book(3,"sach 3","a",2020);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.listBook());
