const lyrics = 'tmi bondo kala Pakhi';

const parts = lyrics.split(' ');
console.log(parts);
const sentence = lyrics.split('.');
console.log(sentence);
const character = lyrics.split('');
console.log(character);



// slice=vag kora 

const partial = lyrics.slice(5,9);
// console.log(partial);
const partial2 = lyrics.substring(5,9);
console.log(partial2);

const line = [
    'tmi bondo kala Pakhi,ami jno ki.bosonto kale tmai valobeseci'
];
const newSong = line.join(': ');
console.log(newSong);