console.log('------------step-1-----------------------');
let personalDetails = {
    name:"Niketan Thombare",
    age: "28",
    livesIn :"Nagpur",
    graduation:"B.E."
}
console.log('------------step-2-----------------------');
let collegeDetails = {
    college :"Manoharbhai Patel institute of engineering & technology",
    location :"Gondia",
    university:"RTMNU"
}

// let wholeDetails ={
//     ...personalDetails,
//     ...collegeDetails
// }
console.log('------------step-3-----------------------');
let mergedObject = Object.assign({},personalDetails,collegeDetails);
console.table(mergedObject);

console.log('------------step-4-----------------------');
let arr = ["Sanket", "Vishwajeet","Jayant","Niketan"]
Object.freeze(arr);

console.log('------------step-5-----------------------');
for (const name of arr) {
    console.log(`My Friends :-${name}`);
}
console.log('------------step-6-----------------------');
let string = "Codemind Technology";
let newstring = string.substring(9)
let newstring1 = string.substring(0,9)// for final string concatination
let reverseString=""
for (let index = newstring.length-1; index >= 0 ; index--) {
    const element = newstring.charAt(index);
    reverseString =reverseString.concat(element);
}
let fstring = newstring1.concat(reverseString);
console.log(fstring);