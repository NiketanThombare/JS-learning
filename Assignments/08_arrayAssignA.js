console.log(`____Step 1______`);
let constArrayFruits=["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`First Element : ${constArrayFruits[0]}`);
console.log(`Last Element :  ${constArrayFruits[constArrayFruits.length-1]}`);

console.log(`____Step 2______`);
constArrayFruits.unshift("Papaya");
console.log(`Added Papaya Element Before Banana__ [${constArrayFruits}]`);

console.log(`____Step 3______`);
constArrayFruits.splice(4,1);
console.log(`Removed Mango from the Array ${constArrayFruits}`);

console.log(`____Step 4______`);
constArrayFruits.push("Pineapple")
console.log(`Added Last element : ${constArrayFruits}`);

console.log(`____Step 5______`);
constArrayFruits.splice(4,0,"Dragon Fruit");
console.log(`Added element Dragon fruit before water melon ${constArrayFruits}`);

console.log(`____Step 6______`);
constArrayFruits.splice(2,1,"Kiwi");
console.log(`Replaced the element orange with Kiwi__[ ${constArrayFruits}]`);

console.log(`____Step 7______`);
// constArrayFruits.splice(1,4);
console.log(`Index starting from 1 to 4 :${constArrayFruits.slice(1,5)}`);
console.log(`${constArrayFruits}`);

console.log(`____Step 8______`);
let element1=constArrayFruits[constArrayFruits.length-1]
let element2=constArrayFruits[constArrayFruits.length-2]
let element3=constArrayFruits[constArrayFruits.length-3]
console.log(`Last Three elements of the array : ${element1} ${element2} ${element3}`);