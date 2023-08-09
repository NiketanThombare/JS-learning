let getFactorial=function(number) {

    let factorial=1;
    for (let index = 5; index >=0; index--) {
       factorial=factorial*index;
    }
    console.log(`factorial of ${number} is : ${factorial}`);

}
getFactorial(5);