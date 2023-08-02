// A E I O U
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer");


function oddPositionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
        // Log only odd positioned chars on console and do not consider empty spaces
        if(char!=" " && index%2==1){

        }
    }

}
oddPositionedChars("hello");
oddPositionedChars("test");














// WAP to get the sum of numbers from 0 to 20
let sum = function(){
    let totalSum = 0;
     for (let index = 1; index <=20; index++) {
         totalSum = totalSum + index;
     }
     console.log(`Sum of first 20 numbers is : ${totalSum}`);
 }
 sum();
console.log("---------------------------------");
let strNew="hii good morning";
 const count = strNew.match(/[aeiou]/gi).length;
 console.log(count);

 console.log("---------------------------------");
 let result = '';
for(let i = 1; i <= 3; i++) {
    for(let j = 3; j>=i; j--){
       result = result.concat(" ")
       }
       for(let k =1; k <= 5; k=k+2) {
        result = result.concat("* ")
       }
       result = result.concat('\n')
        
    }
    console.log(result);
