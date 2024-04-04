interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Slipknot",
        year: 2015
    }
}

console.log(audioPlayer.song);
const song = "New son";
const { song:anothersong,
        songDuration:duration,
        details     
} = audioPlayer;
console.log(anothersong);
console.log(duration);

const {author} = details;

console.log(author);

console.log("---------------------------");

const dbz: string [] = ["Goku", "Vegeta", "Trunks"];
console.log(dbz[2] || "Empty");


export{}