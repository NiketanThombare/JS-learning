console.log(`--------------------step 1--------------------`);
var greaterNumber=function(num1,num2){
var result=(num1>num2)?num1:num2;
console.log(`Greater Number between ${num1} and ${num2} is :${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`--------------------step 2--------------------`);

var isEvenOrOdd=function(num){
var result=(num%2==0)?`true`:`false`;
return result;
}
var result=isEvenOrOdd(29);
console.log(`Given Number 29 is Even : ${result}`);
var result=isEvenOrOdd(44);
console.log(`Given Number 44 is Even : ${result}`);
var result=isEvenOrOdd(0);
console.log(`Given Number 0 is Even : ${result}`);
var result=isEvenOrOdd(101);
console.log(`Given Number 101 is Even : ${result}`);

console.log(`--------------------step 3--------------------`);
var wordLength=function(str){
var strLength=str.length;
var result=(strLength%2==0)?`even`:`odd`;
console.log(`${str} has ${result} lenth`);
}
wordLength(`JavaScript`);
wordLength(`developer`);
wordLength(`Google`);

console.log(`------------------------------------------`);

var evenOrOdd1=function(str){
   var resultNew= str.length;
   var res=(resultNew%2==0 && resultNew>6)?`even`:`odd`
   return res;
}
var res=evenOrOdd1("Vish");
console.log(res);