function reverseString(text){
    for(let i = 0; i< text.length; i++){
        const element = text[i];
        console.log(element);
    }
}
const myString = 'I a good girl';
const reversed = reverseString(myString);

function reverseString3(text){
    for(let i = text.length; i>=0; i--){
        const element = text[i];
        console.log(element);
    }
}
const myString3 = 'I am good girl';
const reversed3 = reverseString3(myString3);
console.log(reversed3);


function reverseString2(text){
    let reversed = '';
    for(let i = text.length-1; i>=0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element,reversed);
    }
    return reversed;
}
const myString2 = 'I am good girl';
const reversed2 = reverseString2(myString2);
console.log(reversed2);