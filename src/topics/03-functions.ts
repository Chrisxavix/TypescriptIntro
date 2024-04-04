function AddNumbers(a: number, b: number) {
    return a + b;
}
const result: number = AddNumbers(8, 2);


const AddNumbersArrow = (a: number, b: number): string => {
    return (a + b).toString();
}
const resultArrow: string = AddNumbersArrow(8, 2);

console.log({
    result,
    resultArrow
});


function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base; 
}
const multiplyResult: number = multiply(8, 2);
console.log({multiplyResult});

interface Character {
    name: string;
    hp: number;
    showHP: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}


const strider: Character = {
    name: "Strider",
    hp: 50,
    showHP() {
        console.log("Puntos de vida " + this.hp);
        
    }
}

//healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHP();


export{}