function reverseString(str){

 let reverseStr="";
    for (let index = str.length-1; index >= 0; index--) {
     let char=str.charAt(index);
     if(char!=" "){
        reverseStr=reverseStr.concat(char);

     }
        
    }
    console.log(reverseStr);

}
reverseString("Hard Work always pays back");
reverseString("Soon I will be Angular It champ")
