const lyrics = 'tmi bondo kala Pakhi';
const doesExist = lyrics.toLowerCase().includes('pakhi');
console.log(doesExist);

// indexof
console.log(lyrics.indexOf('bondo'));

// startswith
console.log(lyrics.startsWith('tmi'));
// console.log(lyrics.startsWith('2mi'));

// endswith
const fileName = 'mybiodata.pdf';
// const otherFile = 'mypic.png';
// fileName.endsWith('pdf');

console.log(lyrics.endsWith('Pakhi'));