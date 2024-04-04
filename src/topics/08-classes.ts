export class Person {
    
    constructor(public name: string, public address: string) {}
}


const chris = new Person("Lucas", "Tres")
const chris1 = new Person("Dani", "Tres")

console.log(chris);
console.log(chris1);
