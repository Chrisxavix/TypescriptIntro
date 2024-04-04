import { Product, taxCalculation } from "./06-function-destructur";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 150.0
    },
    {
        description: "Samsumg",
        price: 250.0
    }
];

const [total, tax] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log("Total ", total);
console.log("Tax ", tax);
