const arrayNums=[20,3,4,56,90,400,49];

console.log('----------------step 1------------------');
let clonedArray=arrayNums;
clonedArray.push(55,56);
console.log(`original array : ${arrayNums}`);
console.log(`cloned array  : ${clonedArray}`);

console.log('----------------step 2------------------');

let deepClonedArray=[...arrayNums];
deepClonedArray.push(10,25);
console.log(`original array : ${arrayNums}`);
console.log(`deep Cloned Array using spread : ${deepClonedArray}`);

console.log('----------------step 3------------------');

let arrayEven=[2,30,14,8];
arrayNums.push(...arrayEven);
console.log(arrayNums);

console.log('----------------step 4------------------');

const employee_info={
emp_id:27,
emp_name:"john Doe",
salary:{
    july_month:"40,0000INR",
    aug_month:"50,0000INR",
    jun_month:"65,0000INR"
},
address:{
    locality:{
        colony:"OM Vrindavan Society",
        street:"kanch Pokli, 431202",
             },
    city:"Mumbai",
    state:"Maharashtra",
    country:"India"         
},
mobiles:["+91 8600 3456 88","1800- 4567 32","+91-9096 5678 77"]
}

console.log('----------------step 5.1------------------');
console.log(`Employee address : locality: colony-${employee_info.address.locality.colony},street:${employee_info.address.locality.street}, city :${employee_info.address.city}, state:${employee_info.address.state}, country:${employee_info.address.country}`);

console.log('----------------step 5.2------------------');
console.log(employee_info.mobiles);

console.log('----------------step 6------------------');

let deepClonedObject=JSON.parse(JSON.stringify(employee_info));

console.log('----------------step 6.1------------------');
deepClonedObject.salary.july_month="80 0000INR";
console.log('----------------step 6.2------------------');
employee_info.address.country="United Kingdom";
console.log('----------------step 6.3------------------');
console.log(` emplyee object country :${employee_info.address.country}`);
console.log(`Cloned object sallary :${deepClonedObject.salary.july_month}`);