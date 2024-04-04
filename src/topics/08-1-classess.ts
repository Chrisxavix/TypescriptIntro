export class Person {
   
    constructor(
        public name: string,
        public address: string
    ) {}
}
 

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super("Skin", "Towel");
    }
}
 
const chris = new Hero("Lucas", 45, "Tres")
const chris1 = new Person("Dani", "Tres")
 
console.log(chris);
console.log(chris1);