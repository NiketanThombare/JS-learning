console.log("-------------------step1-----------------------");
let arrowFun1=()=>{
console.log("Good Morning, Today is Tuesday...!");
}
arrowFun1();

console.log("-------------------step2-----------------------");
let arrowFun2=(val1,val2,val3=1)=>{
  let mul=val1*val2*val3;
  console.log(`multiplication of ${val1},${val2},${val3} = ${mul}`);
}
arrowFun2(5,5,2);
arrowFun2(10,4);

console.log("-------------------step3-----------------------");

let arrowFun3=(val1,val2,val3,val4,val5)=>{
    let add=val1+val2+val3+val4+val5;
    return add;
   
  }
  let result1=arrowFun3(100,100,200,349,756);
  console.log(`Addition is = ${result1}`);
 let result2= arrowFun3("I am"," Learning"," ES6"," Features"," In depth");
 console.log(`Addition is= ${result2}`);