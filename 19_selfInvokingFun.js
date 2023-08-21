// Self invoking function or IIFE - Immediately invoked function expression
( function(){
    console.log(`inside display function..`);
} )();




(function(name1,args){
    console.log(name1,args);
})("vinay",40)


(function(a,b){
    let sum = a+b
    console.log(sum);
})(5,4)