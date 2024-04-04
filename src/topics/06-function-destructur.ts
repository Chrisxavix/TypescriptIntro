export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//Con Destructuración
export function taxCalculation(options: TaxCalculationOptions): number[] {
    const {tax, products} = options;
    let total = 0;
    products.forEach( ({price}) => {
        total += price;
    })
    return [total, total * tax];
}

//Sin Destructuración
function taxCalculationDT(options: TaxCalculationOptions): number[] {
    let total = 0;
    options.products.forEach(product => {
        total += product.price;
    })
    return [total, total * options.tax];
}

const shoppigCart = [phone, tablet];

const tax = 0.15;
console.log(shoppigCart);


const result = taxCalculation({
    products: shoppigCart,
    tax: tax
});


console.log("Resultados: " + result);




export {}