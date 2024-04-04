export function whatsMyType<T>( argument: T) {

    return argument;
}


let amString = whatsMyType<string>("String prro")
let amNumber = whatsMyType<number>(850)
let amArray = whatsMyType<number[]>([1, 2, 8])

console.log(amString);
console.log(amNumber);
console.log(amArray);
