let arrayOfFriends=["kishor","jayant","uday","niketan"];
arrayOfFriends.sort();
arrayOfFriends.reverse();
console.log(arrayOfFriends);


console.log('--------------------------');

const array = [11, 23, 5, 9, 27, 53 , 36];

for (let index = 0; index < array.length; index++) {

    let x=index;
    let count=0;
    let num=array[index];
    for (let i=0; i<=num; i++) {
        
        if (num%i==0) {
           count=count+1;
        }
    }
if (count==2) {
    console.log(`prime number : ${array[index]}`);
}
    
    
}