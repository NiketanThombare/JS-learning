
let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  let currentElement = array[i];
  if (!uniqueArray.includes(currentElement)) {
    uniqueArray.push(currentElement);
  }
}

console.log(uniqueArray); 