const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap)
if(gap < 5){
    console.log('you r be friend');
}
else{
    console.log('not friend');
}


// const number = 2.7545;
// const fullNumber = Math.round(number);
// console.log(fullNumber);


// const result2 = Math.ceil(2.0007);
// const result3 = Math.floor(2.8759);
// console.log(result2);
// console.log(result2);

// random 

// console.log(Math.random());
const random = Math.random()*100;
console.log(random);

const random2 = Math.round(Math.random()*100);
console.log(random2);

for(let i = 0;i< 20;i++){
    const random3 = Math.round(Math.random()*6);
    console.log(random3);
}