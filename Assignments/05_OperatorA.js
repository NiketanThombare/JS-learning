function squareOfWordlength(str){
              var strLength=str.length;
              return strLength*strLength;
}
console.log(`-------------------------step1-----------------------------`);
var result=squareOfWordlength("JavaScript");
console.log(`given string is : "JavaScript" and Square of its lenth is : ${result}`);
var result=squareOfWordlength("Google Chrome");
console.log(`given string is : "Google Chrome" and Square of its lenth is : ${result}`);
var result=squareOfWordlength("Developer smart");
console.log(`given string is : "Developer smart" and Square of its lenth is : ${result}`);

console.log(`-------------------------step2-----------------------------`);

var operation=function(){
   var str="I am Angular Developer";
   var strLength=str.length;
   var totalNoWords=str.split(" ").length;
   var result1=strLength/totalNoWords;
   var result2=strLength*totalNoWords;
   console.log(`Given String is : ${str}, its length is :${strLength},total words :${totalNoWords}`);
   console.log(`String length / total no of words is : ${result1}`);
   console.log(`String length * total no of words is : ${result2}`);
}
operation();
console.log(`-------------------------`);
var square=function(num){
   var result=num*num;
   return result;
}
var result1=square(5);
console.log(`square of 5 is ${result1}`);
var result2=square(10);
console.log(`square of 10 is ${result2}`);