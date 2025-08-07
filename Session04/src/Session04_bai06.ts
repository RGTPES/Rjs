interface Category {
  id: string;
  name: string;
};

interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
}
const ListProducts: Product[] = [
  {
    id: "1",
    name: "Laptop",
    price: 100000,
    category: { id: "1", name: "Electronics" }
    },
    {
    id: "2",
    name: "Smartphone",
    price: 50000,
    category: { id: "2", name: "Electronics" }
    },
    {
    id: "3",
    name: "T-shirt",
    price: 2000,
    category: { id: "3", name: "Clothing" }
    }
];

const getFinalPrice = (product: Product, discount: number): number => {
  return product.price - (product.price * discount / 100);
}
const printProductDetails = (product: Product, discount: number): void => {
  const finalPrice = getFinalPrice(product, discount);
  console.log(`Product: ${product.name}, Category: ${product.category.name}, Price: ${product.price}, tien sau khi giam ${discount}% discount: ${finalPrice}`);
}

ListProducts.map(product => {
  printProductDetails(product, 10);
});