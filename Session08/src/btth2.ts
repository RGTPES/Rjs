class Customer{
    id: number;
    name: string;
    email: string;
    shippingAddress:string;
    constructor(id:number, name: string,email: string,shippingAddress:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails(): string {
        return `ID: ${this.id}, Nmae: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
    
}
abstract class Product{
    id:number;
    name:string;
    price:number;
    stock:number;
    constructor(id:number,name:string,price:number,stock:number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock
    }
    sell(quantity:number){
        this.stock-= quantity;
    }
    restock(quantity:number){
        this.stock+= quantity;
    }
    abstract getProductInfo():string;
    abstract getShippingCost(distance:number):number;
    abstract getCategory():string;

}
class ElectronicsProduct extends Product{
    warrantyPeriod: number;
    constructor(id:number,name:string,price:number,stock:number,warrantyPeriod:number){
        super(id,name,price,stock)
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price.toLocaleString()} VND, Stock: ${this.stock}, WarrantyPeriod ${this.warrantyPeriod} thang`;
    }
    getShippingCost(distance: number): number {
        return 50000;
    }
    getCategory(): string {
        return "Electronic";
    }
}

