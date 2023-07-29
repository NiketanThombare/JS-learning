function checkMarriageEligibility(gender,age){
if(gender=="male"){
    if(age>=21){
        console.log(`age is :${age} and he is Eligible for marriage`);
    }
    else{
        console.log(`age is :${age} and he is Not Eligible for marriage`);
    }
    
}else if(gender=="Female"){
    if(age>=18){
        console.log(`age is :${age} and She is Eligible for marriage`);
    }
    else{
        console.log(`age is :${age} and She is Not Eligible for marriage`);
    }
}else{
    console.log(`gender is :${gender} :INVALID INPUT`);
}
}
checkMarriageEligibility("male",17);
checkMarriageEligibility("male",25);
checkMarriageEligibility("Female",28);
checkMarriageEligibility("Female",16);
checkMarriageEligibility("Other",35);
checkMarriageEligibility("Other",41);