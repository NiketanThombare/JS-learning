var firstName = "Gajanan";
console.log(firstName);
console.log(typeof firstName);

var age = 32;
console.log(age);
console.log(typeof age);

var isMarried = true;
console.log(isMarried);
console.log(typeof isMarried);

var city = 'Pune';
console.log(typeof city);
city = 50000;
console.log(typeof city);
console.log(typeof undefined);;

console.log('=======================================');
var salary = null;
console.log(typeof salary);
salary = 40000.50; // 
var typeOfSalary = typeof salary;
console.log('salary=>', salary, 'typeof salary =>', typeOfSalary);
salary = "Forty Thousand";
var salaryTypeOf = typeof salary;
console.log('salary=>', salary, 'typeof=>', salaryTypeOf);
console.log('=======================================');
var num1=100;
var num2=200;
console.log('before swapping ','a =',num1 ,'b=',num2);
var temp=num1;
num1=num2;
num2=temp;
console.log('after swapping ','a =',num1 ,'b=',num2);