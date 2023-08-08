console.log('------------step-1----------------------');
let bankSbi ={
    bankName : "SBI Bank",
    branch : "Kasturba Road,Chandrapur",
    manager: "Aman Chopra",
    ifsc : "SBIN000346"
}
console.log('------------step-2----------------------');
let bankLocation ={
    streat: "Kasturba Road",
    city : "Chandrapur",
    pinCode : "442902"
}
console.log('------------step-3.1----------------------');
let mergedBank1 = {...bankSbi,...bankLocation}
console.table(mergedBank1);
console.log('------------step-3.2----------------------');
let mergedBank2 = Object.assign({},bankSbi,bankLocation);
console.table(mergedBank2);

console.log('------------step-4----------------------');
let rateOfInterest ={
    homeLoanIntrest :"5.6%",
    personalLoanIntrest :"6.7%",
    dueIntrest: "4.6%"
}
console.log('------------step-5----------------------');
let sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log('------------step-6----------------------');
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Details of  SBI Bank :- ${key} : ${element}`);
    }
}