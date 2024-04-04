let skillsNew = ["Bash", "Counter", "Healing", true, 123, 3.3];
const skills: string[] = ["Bash", "Counter", "Healing"];
console.log(skills);
console.log(skillsNew);



interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometow?: string
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["power", "fire"],
}
strider.hometow = "River"


console.table(strider);


export{}