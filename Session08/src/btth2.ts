abstract class Product {
    static nextId = 1
    id: number
    name: string
    price: number
    stock: number
    constructor(name: string, price: number, stock: number) {
        this.id = Product.nextId++
        this.name = name
        this.price = price
        this.stock = stock
    }
    sell(quantity: number) {
        if (quantity > this.stock) throw new Error("Khong du hang")
        this.stock -= quantity
    }
    restock(quantity: number) {
        this.stock += quantity
    }
    abstract getProductInfo(): string
    abstract getShippingCost(distance: number): number
    abstract getCategory(): string
}

class ElectronicsProduct extends Product {
    warrantyPeriod: number
    constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
        super(name, price, stock)
        this.warrantyPeriod = warrantyPeriod
    }
    getProductInfo(): string {
        return `${this.name} - Gia: ${this.price.toLocaleString()} VND - Ton kho: ${this.stock} - Bao hanh: ${this.warrantyPeriod} thang`
    }
    getShippingCost(): number {
        return 50000
    }
    getCategory(): string {
        return "Electronics"
    }
}

class ClothingProduct extends Product {
    size: string
    color: string
    constructor(name: string, price: number, stock: number, size: string, color: string) {
        super(name, price, stock)
        this.size = size
        this.color = color
    }
    getProductInfo(): string {
        return `${this.name} - Gia: ${this.price.toLocaleString()} VND - Ton kho: ${this.stock} - Size: ${this.size} - Mau: ${this.color}`
    }
    getShippingCost(): number {
        return 25000
    }
    getCategory(): string {
        return "Clothing"
    }
}

class Customer {
    static nextId = 1
    id: number
    name: string
    email: string
    shippingAddress: string
    constructor(name: string, email: string, shippingAddress: string) {
        this.id = Customer.nextId++
        this.name = name
        this.email = email
        this.shippingAddress = shippingAddress
    }
    getDetails(): string {
        return `ID: ${this.id} - ${this.name} - ${this.email} - ${this.shippingAddress}`
    }
}

class Order {
    static nextId = 1
    orderId: number
    customer: Customer
    products: { product: Product, quantity: number }[]
    totalAmount: number
    constructor(customer: Customer, products: { product: Product, quantity: number }[]) {
        this.orderId = Order.nextId++
        this.customer = customer
        this.products = products
        this.totalAmount = products.reduce((s, p) => s + p.product.price * p.quantity, 0)
    }
    getDetails(): string {
        return `Order ID: ${this.orderId}\nKhach: ${this.customer.getDetails()}\nSan pham:\n${this.products.map(p => `${p.product.getProductInfo()} - SL: ${p.quantity}`).join("\n")}\nTong: ${this.totalAmount.toLocaleString()} VND`
    }
}

class Store {
    products: Product[] = []
    customers: Customer[] = []
    orders: Order[] = []
    addProduct(product: Product) {
        this.products.push(product)
    }
    addCustomer(name: string, email: string, address: string) {
        const c = new Customer(name, email, address)
        this.customers.push(c)
    }
    createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]) {
        const customer = this.findEntityById(this.customers, customerId)
        if (!customer) return null
        const items: { product: Product, quantity: number }[] = []
        for (const pq of productQuantities) {
            const prod = this.findEntityById(this.products, pq.productId)
            if (prod && pq.quantity > 0 && prod.stock >= pq.quantity) {
                prod.sell(pq.quantity)
                items.push({ product: prod, quantity: pq.quantity })
            } else {
                return null
            }
        }
        if (items.length === 0) return null
        const order = new Order(customer, items)
        this.orders.push(order)
        return order
    }
    cancelOrder(orderId: number) {
        const idx = this.orders.findIndex(o => o.orderId === orderId)
        if (idx !== -1) {
            const order = this.orders[idx]
            order.products.forEach(p => p.product.restock(p.quantity))
            this.orders.splice(idx, 1)
        }
    }
    listAvailableProducts() {
        this.products.filter(p => p.stock > 0).forEach(p => console.log(p.getProductInfo()))
    }
    listCustomerOrders(customerId: number) {
        const list = this.orders.filter(o => o.customer.id === customerId)
        if (list.length === 0) console.log("Khach hang chua co don hang")
        else list.forEach(o => console.log(o.getDetails()))
    }
    calculateTotalRevenue(): number {
        return this.orders.reduce((s, o) => s + o.totalAmount, 0)
    }
    countProductsByCategory() {
        const result = this.products.reduce((acc, p) => {
            acc[p.getCategory()] = (acc[p.getCategory()] || 0) + 1
            return acc
        }, {} as Record<string, number>)
        console.log(result)
    }
    updateProductStock(productId: number, newStock: number) {
        const idx = this.products.findIndex(p => p.id === productId)
        if (idx !== -1) this.products[idx].stock = newStock
    }
    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(i => i.id === id)
    }
}

const store = new Store()

while (true) {
    const choice = Number(prompt(
`1. Them khach hang
2. Them san pham
3. Tao don hang
4. Huy don hang
5. San pham con hang
6. Don hang theo khach
7. Tong doanh thu
8. Thong ke theo danh muc
9. Cap nhat ton kho
10. Tim theo ID (Customer/Product)
11. Xem chi tiet san pham
0. Thoat`
    ))
    if (Number.isNaN(choice)) continue
    if (choice === 0) break
    if (choice === 1) {
        const name = prompt("Ten khach hang:") || ""
        const email = prompt("Email:") || ""
        const address = prompt("Dia chi:") || ""
        store.addCustomer(name, email, address)
    }
    if (choice === 2) {
        const type = Number(prompt("1. Dien tu\n2. Quan ao"))
        const name = prompt("Ten san pham:") || ""
        const price = Number(prompt("Gia:"))
        const stock = Number(prompt("So luong:"))
        if (type === 1) {
            const warranty = Number(prompt("Bao hanh (thang):"))
            store.addProduct(new ElectronicsProduct(name, price, stock, warranty))
        } else if (type === 2) {
            const size = prompt("Size:") || ""
            const color = prompt("Mau:") || ""
            store.addProduct(new ClothingProduct(name, price, stock, size, color))
        }
    }
    if (choice === 3) {
        const customerId = Number(prompt("ID khach hang:"))
        const count = Number(prompt("So loai san pham:"))
        const arr: { productId: number, quantity: number }[] = []
        for (let i = 0; i < count; i++) {
            const pid = Number(prompt("ID san pham:"))
            const qty = Number(prompt("So luong:"))
            arr.push({ productId: pid, quantity: qty })
        }
        const order = store.createOrder(customerId, arr)
        if (order) console.log("Tao don thanh cong:\n" + order.getDetails())
        else console.log("Tao don that bai")
    }
    if (choice === 4) {
        const oid = Number(prompt("ID don hang:"))
        store.cancelOrder(oid)
    }
    if (choice === 5) {
        store.listAvailableProducts()
    }
    if (choice === 6) {
        const cid = Number(prompt("ID khach hang:"))
        store.listCustomerOrders(cid)
    }
    if (choice === 7) {
        console.log("Tong doanh thu: " + store.calculateTotalRevenue().toLocaleString() + " VND")
    }
    if (choice === 8) {
        store.countProductsByCategory()
    }
    if (choice === 9) {
        const pid = Number(prompt("ID san pham:"))
        const stock = Number(prompt("Ton kho moi:"))
        store.updateProductStock(pid, stock)
    }
    if (choice === 10) {
        const type = Number(prompt("1. Customer\n2. Product"))
        const id = Number(prompt("ID:"))
        if (type === 1) console.log(store.findEntityById(store.customers, id)?.getDetails() || "Khong tim thay")
        else if (type === 2) console.log(store.findEntityById(store.products, id)?.getProductInfo() || "Khong tim thay")
    }
    if (choice === 11) {
        const pid = Number(prompt("ID san pham:"))
        const p = store.products.find(pr => pr.id === pid)
        if (p) console.log(p.getProductInfo())
        else console.log("Khong tim thay")
    }
}
