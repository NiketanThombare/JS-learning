const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`original Array ; ${arrayRollNumbers}`);
console.log("------------------step1-----reverse the array-------------------");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log("------------------step2-----sorting with sort()-------------------");
const arrayRollNumbers1=[113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers1.sort();
console.log(arrayRollNumbers1);

console.log("------------------step3-----Ascending order with sort()-------------------");
const arrayRollNumbers2=[113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers2.sort((num1,num2)=>{
return num1-num2;
});
console.log(arrayRollNumbers2);

console.log("------------------step4-----greatest Number-------------------");
const arrayRollNumbers3=[113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers3.sort((num1,num2)=>{
return num1-num2;
});
console.log(`greatest number is : ${arrayRollNumbers3[arrayRollNumbers3.length-1]}`);


console.log("------------------step5-----smallesst Number-------------------");
const arrayRollNumbers4=[113,45,56,11,32,45,109,799,56,45];
arrayRollNumbers4.sort((num1,num2)=>{
return num1-num2;
});
console.log(`Smallest number is : ${arrayRollNumbers4[0]}`);

console.log("------------------step6-----Removing duplicate  Number-------------------");

const arrayRollNumbers5=[113,45,56,11,32,45,109,799,56,45];
let arrayRollNumbers6=[...new Set(arrayRollNumbers5)]
console.log(arrayRollNumbers6);