constArrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`_Step 1__`);
let element=constArrayNumber.length;
console.log(`The total number of element available in Array is :${element}`);

console.log(`_Step 2__`);
let element1=constArrayNumber[0];
let element2=constArrayNumber[constArrayNumber.length-1];
console.log(`First and last element in the array is ${element1} and ${element2}`);

console.log(`_Step 3__`);
let element3=constArrayNumber[constArrayNumber.length-3];
console.log(`Third last element in the Array is : ${element3}`);

console.log(`_Step 4__`);
let str='';
for (let index = 0; index < constArrayNumber.length; index++)
 {
    let value=constArrayNumber[index];
    if(value%2==0){
        str=str.concat(constArrayNumber[index]).concat(' ');
    }
}
console.log(`Even element in the Array : ${str}`);
console.log(`_Step 5__`);
let str1='';
for (let index = 0; index < constArrayNumber.length; index++)
 {
    let value=constArrayNumber[index];
    if(value%2==1){
        str1=str1.concat(constArrayNumber[index]).concat(' ');
    }
}
console.log(`Odd element in the Array : ${str1}`);



console.log(`_Step 6__`);
let count=0;
for (let index = 0; index < constArrayNumber.length; index=index+2)
 {
    let element = constArrayNumber[index];
     count=count+element;
    
    
}
console.log(`sum of Even position Number are: ${count}`);

console.log(`_Step 7__`);

var count1=0;
for (let index = 1; index < constArrayNumber.length; index=index+2)
 {
    const element = constArrayNumber[index];
    count1=count1+element
    
}
console.log(`sum of Odd position Number are : ${count1}`);

console.log(`_Step 8__`);

let count2=0;
for (let index = 0; index < constArrayNumber.length; index++)
 {
    let element = constArrayNumber[index];
     count2=count2+element;
}
console.log(`Sum of all the element in Array: ${count2}`);

console.log(`_Step 9__`);
let str2="";
for (let index = 0; index < constArrayNumber.length; index++) {
    const element = constArrayNumber[index];
    if(element%5==0)
    {
        str2=str2.concat(element).concat(' '); 
    }
}
console.log(`Element divisible by 5 are : ${str2}`);


console.log(`_Step 10__`);
let element4=constArrayNumber.includes(115);
console.log(`Is number 115 is available in array : ${element4}`);

console.log(`_Step 11__`);
let element5=constArrayNumber.includes(23);
console.log(`Is number 23 is available in array : ${element5}`);

console.log(`_Step 12__`);
constArrayNumber.splice(2,0,55,66);
console.log(`Inserted the number 55 and 66 before index 3 : ${constArrayNumber}`);

console.log(`___Step 13___`);
constArrayNumber.splice(4,3);
console.log(`3 elements deleted from index 4 : ${constArrayNumber}`);