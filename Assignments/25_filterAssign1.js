const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log('--------------------step1----------------------');
let newArray=arrayNumbers.filter((element)=>{
return element>50;
});
console.log(`Numbers >50 are : ${newArray}`);

console.log('--------------------step2----------------------');
let newArray2=arrayNumbers.filter((element)=>{
return element%2==0;
});
console.log(`Even Numbers are : ${newArray2}`);

console.log('--------------------step3----------------------');
let newArray3=arrayNumbers.filter((element)=>{
return element%2==1;
});
console.log(`Odd Numbers are : ${newArray3}`);

console.log('--------------------step4----------------------');
let newArray4=arrayNumbers.filter((element)=>{
return element%5==0;
});
console.log(`Multiple of 5 are : ${newArray4}`);

console.log('--------------------step5----------------------');
let newArray5=arrayNumbers.filter((element)=>{
return element>20 && element<50;
});
console.log(`Numbers between 20 and 50 Are  : ${newArray5}`);