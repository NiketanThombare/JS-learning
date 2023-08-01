function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`total numbers of Vowel are ${count}`);
}
vowelCount(" I am very good IT Developer");

function countCube(){
    let count=0;
    for (let index = 1; index <= 5; index++) {
       let cube=index*index*index;
       count=count+cube;
        
    }
    console.log(`total addition of cube from 1 to 5 is ${count}`);
}
countCube();

function oddpositionChars(str)
{
    let str1="";
    for (let index = 0; index <=str.length-1; index++)
    {
       let char= str.charAt(index);
       if (char!=" " && index%2==1) {
        // 
        str1=str1.concat(char+` `)
       }
        
    }
    console.log(`char at odd position is ${str1}`);
}
oddpositionChars("Hard work always pays back");
oddpositionChars("Soon i will be Angular IT champ");