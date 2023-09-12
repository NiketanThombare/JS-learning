const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`---------------step 1-----------------------`);
//aproch 1- using traditional way

let sum = 0;
for (const element of array_numbers) {
  sum = sum + element; 
}
console.log(`Sum of All Element: traditional Way- ${sum}`);

//aproch 2- using reduce() method

let sum2=array_numbers.reduce( (runningTotal,element)=>{
   return runningTotal+element;
});
console.log(`Sum of All Element: reduce()- ${sum2}`);

console.log(`---------------step 2-----------------------`);

let result=array_numbers.filter((element)=>{
      return element%5==0;
});
let sumNew=result.reduce((runningTotal,value)=>{
    return runningTotal+value;
});
console.log(`sum of element which are devisible by 5 is  ${sumNew}`);