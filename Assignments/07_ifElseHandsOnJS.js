console.log(`------------------------STEP-1---------------------------`);
function chekEvenOrOdd(value) {
  if (isNaN(value) || value < 0 || value == null || value == undefined) {
    console.log(`${value} is invalid, please provide valid value`);
    return `ENVALID`;
  } else {
    if (value % 2 == 0 || value == 0) {
      return `EVEN`;
    } else {
      return `ODD`;
    }
  }
}
var isEven1 = chekEvenOrOdd(45);
console.log(`the given value "45" is : ${isEven1}`);

var isEven2 = chekEvenOrOdd(70);
console.log(`the given value "70" is : ${isEven2}`);

var isEven3 = chekEvenOrOdd(67);
console.log(`the given value "67" is : ${isEven3}`);

var isEven4 = chekEvenOrOdd(98);
console.log(`the given value "98" is : ${isEven4}`);

console.log(`------------------------STEP-2---------------------------`);

function checkCharLength(str){
    var strLength=str.length;
    if(strLength>10){
        console.log(`${str} has more than 10 characters`);
    }
    else{
        console.log(`${str} has less than or 10 characters`);
    }

}
checkCharLength("JavaScript-ES6");

console.log(`------------------------STEP-3---------------------------`);

function checkStartsWith(str1,str2){
     var result= str1.startsWith(str2);
     if (result) {
        console.log(`given string "${str1}" starts with "${str2}"`);
     } else {
        console.log(`given string "${str1}" is NOT starts with "${str2}"`);
     }
}
checkStartsWith("JavaScript Language","Java");

var str="niketan";
