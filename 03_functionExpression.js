var num=100;
console.log(num);
console.log(`-------------named function-----------------------`);
  function display(){
    console.log('I am angular developer');
  }
  display();
  console.log(`-------------function expresion-----------------------`);

  var display=function(){
    console.log('I am angular developer');
  }
  display();
  console.log(typeof display);
  console.log(`-------------function expresion with Arguments-----------------------`);
  var display=function(num1,num2){
    console.log(`addition is ${num1+num2}`);
  }
  display(20,40);

  console.log(`-----function expresion with Arguments and return type ---------------`);
var wordCount=function(str){
         var words=str.split(" ");
         var wordLenth=words.length;
         console.log(`In Given string ${words}`);
         return wordLenth;
}
var wordLenth=wordCount("I am UI Developer");
console.log(`Total word count is : ${wordLenth}`);
