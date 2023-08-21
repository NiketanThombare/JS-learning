function stringHandsOn()
{
    console.log(`--------------------step-1---------------------------------------`);
    var strn=`     Hey you are doing good, Keep it up      `;
    console.log(`Given string is : ${strn}`);
    var lengthOfString=strn.length;
    console.log(`---------------------step-2--------------------------------------`);
    console.log(`Length of the String is : ${lengthOfString}`);
    console.log(`---------------------step-3--------------------------------------`);
    var trimedString=strn.trim();
    var trimedStringlength=trimedString.length;
    console.log(`After Trimed the length of string is : ${trimedStringlength}`);
    console.log(`---------------------step 4--------------------------------------`);
   var lengthOfSpaces= lengthOfString-trimedStringlength;
   console.log(`Total no. of extra spaces count is : ${lengthOfSpaces}`);
   console.log(`----------------------step 5--------------------------------------`);
   var charAT0=trimedString.charAt(0)
   var charATEnd=trimedString.charAt(trimedStringlength-1);
   console.log(`After trim first char is : "${charAT0}" and Last char is : "${charATEnd}"`);
   console.log(`-----------------------step 6-------------------------------------`);
   var afterSplit=trimedString.split(` `);
   console.log(`Total words after trim is : ${afterSplit.length}`);
   console.log(`------------------------step 7------------------------------------`);
   var indexOfGood=trimedString.indexOf('good');
   console.log(`Index of word "good" is : ${indexOfGood}`);
   console.log(`----------------step 8--------------------------------------------`);
   console.log(trimedString);
   var slicedStrng=trimedString.slice(22);
   console.log(`Substring is : ${slicedStrng}`);
   console.log(`----------------step 9--------------------------------------------`);
  var includesUp= trimedString.includes('up');
  console.log(`Is string ends with "up" :${includesUp}`);
  console.log(`------------------step 10------------------------------------------`);
  var includesHey= trimedString.includes('Hey');
  console.log(`Is string starts with word "Hey" : ${includesHey}`);


    


}
stringHandsOn()