console.log("-----------Aproch 1--------------------");
let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  let currentElement = array[i];
  if (!uniqueArray.includes(currentElement)) {
    uniqueArray.push(currentElement);
  }
}

console.log(uniqueArray);

console.log("-----------Aproch 2--------------------");

let arr = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--; // Decrement j to handle the shifted indices after removal
    }
  }
}
console.log(arr);

// Output: [4, 5, 8, 7, 9]

console.log("----------- string problem-------------------------");
const str = "how are you mate";
let updatedString = "";
let strArray = str.split(" ");
for (let index = 0; index < strArray.length; index++) {
  let strNew = strArray[index];
  let x = strNew.charAt(0).toUpperCase();
  let y = strNew.charAt(strNew.length - 1).toUpperCase();
  strNew = strNew
    .replace(strNew.charAt(0), x)
    .replace(strNew.charAt(strNew.length - 1), y);

  updatedString = updatedString.concat(strNew).concat(" ");
}

console.log(updatedString);
console.log(strArray.length);

console.log("-------------------------------");
let niku = "niketant";
let x = niku.charAt(0).toUpperCase();
let y = niku.charAt(niku.length - 1).toUpperCase();

// console.log(niku.charAt(0));
// console.log(niku.charAt(niku.length-1));
niku = niku.replace(niku.charAt(0), x).replace(niku.charAt(niku.length - 1), y);
console.log(niku);


console.log("-----------------------------------");

function toCamelCase(inputString) {
  let camelCaseString = "";
  let capitalizeNext = false;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char === " " ) {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        camelCaseString += char.toUpperCase();
        capitalizeNext = false;
      } else {
        camelCaseString += char.toLowerCase();
      }
    }
  }

 console.log(camelCaseString);
}
toCamelCase("Shivaji University Kolhapur");
toCamelCase("Vishwajeet vasantrao JAmdade");