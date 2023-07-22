function display(){
console.log("my name is Niketan");
console.log("my skills are :JAVA8,SpringBoot,HTML,CSS,JS");
}
function address(){
    console.log("my current city  is Nagpur");
    console.log("my permanent city is Chandrapur");
}
console.log("----------------step1----------------");
display();
address();


function personalDetails(firstName,lastName,collegeName){
console.log("first Name :",firstName,' ',"Last Name :",lastName,' ',"CollegeName :",collegeName);
}
console.log("---------------step2-------------");
personalDetails('Niketan','Thombare','MIET');

function swapValues(value1,value2){
console.log( 'Before Swap->' ,'value1:',value1,':','value2:',value2);
var temp = value1;
value1 = value2;
value2 = temp;
console.log( 'After Swap->' ,'value1:',value1,':','value2:',value2);
}
console.log("-----------------step3--------------");
swapValues("Virat","Anushka");
swapValues(1000,2000);

function addThreeValues(value1,value2,value3){
console.log("addition is : ",value1+value2+value3);
}
console.log("-----------------step4--------------");
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

