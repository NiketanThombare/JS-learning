console.log(`----------------------------STEP:1----------------------------`);
function maleMarriageEligibility(gender,age,boyName){
    return (gender==`Male` && age>=21)?`hey "${boyName}" you are eligible for marriage`:`hey "${boyName}" you are Not eligible for marriage`;

}
var msg=maleMarriageEligibility("Male",25,"Billgates");
console.log(msg);
var msg=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(msg);


console.log(`----------------------------STEP:2----------------------------`);
function FemaleMarriageEligibility(gender,age,girlName){
    return (gender==`Female` && age>=18)?`hey "${girlName}" you are eligible for marriage`:`hey "${girlName}" you are Not eligible for marriage`;

}
var msg=FemaleMarriageEligibility("Female",16,"Jenifer");
console.log(msg);
var msg=FemaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(msg);