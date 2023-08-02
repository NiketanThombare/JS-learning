console.log("--------------PRIME NUMBER-------------------");


  function checkPrimeNumber(num){
    let count=0;
    
        for (let i = 1; i <= num; i++) {
            if (num % i == 0 && num>1 ) {
                count++;
            }
        }
        if (count == 2) {
            console.log(`${num} :is a prime no`);
        
        } else {
            console.log(`${num} :is not a prime no`);
        }
    }
   
 checkPrimeNumber(19);


// console.log("--------------FABBONACI SERIES-------------------");


// function getFabbonaciSeries() {
//     let str="";
//     let t1 = 0;
//     let t2 = 1;

//     for (let i = 1; i <= 20; i++) {
//     console.log(t1 + " ");
//     str=str.concat(t1).concat(" ");
//         let sum = t1 + t2;
//         t1 = t2;
//         t2 = sum;
//     }
// }



