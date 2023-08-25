let first = 5;
let second = 7;
console.log(first,second);

// this is wrong 
// first = second;
// second = first;

// right way:1 
// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);

// right way:2 ---Destructing(jinista olotpalot kora)
[first, second] = [second, first];
console.log(first, second);