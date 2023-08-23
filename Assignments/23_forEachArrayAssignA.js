const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];

console.log("--------------step 1-------------------------");

arrayNumbers.forEach((element,index)=>{
console.log(`element = ${element} :: index= ${index}`);
});

console.log("--------------step 2-------------------------");
console.log("positive numbers are :");
arrayNumbers.forEach((element)=>{
    if(element > 0){
        console.log(`${element} `);
    }
    });


console.log("--------------step 3-------------------------");
console.log("Negative numbers are :");
let newArray=[];
 arrayNumbers.forEach((element)=>{
    if(element < 0){
        newArray.push(element);
    }
    });
    console.log(newArray);

    console.log("--------------step 4-------------------------");
console.log("Even numbers are :");
arrayNumbers.forEach((element)=>{
    if(element%2==0){
        console.log(`${element} `);
    }
    });

    console.log("--------------step 5-------------------------");
 let sum=0;
    arrayNumbers.forEach((element)=>{
        sum=sum+element;
        });
        console.log(`sum of element is : ${sum}`);

        console.log("--------------step 6-------------------------");
        console.log(`even index elements are : `);
    arrayNumbers.forEach((element,index)=>{
            if(index%2==0){
                console.log(`${element}`);
            }
        });
       