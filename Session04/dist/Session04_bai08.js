"use strict";
function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(`Don hang #${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log(`-------------------------`);
    order.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}`);
        console.log(`   Gia: ${item.price} x SL: ${item.quantity} = ${item.price * item.quantity}`);
        if (item.description) {
            console.log(`   Mo ta: ${item.description}`);
        }
    });
    const total = calculateOrderTotal(order);
    console.log(`Tong cong: ${total}`);
}
const orderSample = {
    orderId: "DH001",
    customerName: "Nguyen Van A",
    items: [
        {
            id: "SP001",
            name: "Chuot khong day",
            price: 300000,
            quantity: 2,
            description: "Chuot Logitech "
        },
        {
            id: "SP002",
            name: "Ban phim co",
            price: 800000,
            quantity: 1
        }
    ]
};
printOrder(orderSample);
