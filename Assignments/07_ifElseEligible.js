var voteEligible=function(age){
    var num=+age;
    if (isNaN(num) || num>130 || num<=0 ) {
        console.log(`${age} : INVALID DATA`);
    } else {
        if (num>=18 ) {
            console.log(`${age} : Eligible for vote`);
        } else {
            console.log(`${age} : NOT Eligible for vote`);
        }
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);