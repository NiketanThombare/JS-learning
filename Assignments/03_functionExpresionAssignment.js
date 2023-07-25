console.log(`-------------step-1--------------`);
var square=function(num){
console.log(`Square of ${num} is : ${num*num}`); 
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log(`-------------step-2--------------`);
console.log(`Type of function is : ${typeof square}`);
console.log(`-------------step-3--------------`);
var rectangle=function(lengtth,breath){
console.log(`area of rectangle is : ${lengtth*breath}`);
}
rectangle(499,917);
console.log(`-------------step-4--------------`);
var swapValues=function(value1,value2){
    console.log( `Before Swaping -> value1 : ${value1} & value2 : ${value2}`);
var temp = value1;
value1 = value2;
value2 = temp;
console.log( `After Swaping -> value1 : ${value1} & value2 : ${value2}`);

}
swapValues("mahi","raina");
swapValues(55,77);
console.log(`-------------step-5--------------`);


var givenString=function(strng){
    console.log(`total character in given string is : ${strng.length}`);
    console.log(`character at index 6 is : "${strng.charAt(6)}"`);
    console.log(`character at index 11 is : "${strng.charAt(11)}"`);
    console.log(`Last character in the string is : "${strng.charAt(strng.length-1)}"`);
    console.log(`first character in the string is : "${strng.charAt(0)}"`);
    console.log(`Third Last character in the string is : "${strng.charAt(strng.length-3)}"`);
    var splitedString=strng.split(" ");
    var count=splitedString.length;
    var squarevalue=count*count;
    console.log(`Total no of words in given string is : ${count} and Square of ${count} is: ${squarevalue}`);

}
givenString("JS the most popular language of internet");