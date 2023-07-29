var eligibility=function(gradScore,hscScore,sscScore,candidateName){
var msg=(gradScore>=70 || hscScore>=80 || sscScore>=90)?`Congrats "${candidateName}" you are eligible for TCS interview`:`"${candidateName}" Unfortunately you are not eligible for interview`;
console.log(msg);
}
eligibility(80,86,90,"Niketan");
eligibility(70,65,55,"Satish");
eligibility(60,79,88,"Akshay");