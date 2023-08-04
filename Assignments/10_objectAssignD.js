console.log("---------------Assignment 1------------------")
let professor={
    name : "Dr Rathod",
    qualification:"PHD",
    department:"Computer Science",
    college:"COEP",
    sallary:60000,
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
        mTech:'Data Science'
       },
    certificates: ['Hacker Rank Participation','Certification in IFE course','Certificate in Adv Programming'],
    getDegrees:function(){
        console.log(`Teacher Degrees :${this.degrees.engineering}, ${this.degrees.PHD}, ${this.degrees.mTech}`);
    }
}
console.log("---------------STEP 4------------------")
professor.getDegrees();
console.log("---------------STEP 5------------------")
professor.totalExperience="14 years";
console.log(`total Experience : ${professor.totalExperience}`);
console.log("---------------STEP 6------------------")
console.log(`before modificate sallary is : ${professor.sallary}`);
professor.sallary=80000;
console.log(`After modificate sallary is : ${professor.sallary}`);
console.log(professor);
console.log("---------------STEP 7 & 8------------------")
professor.certificates.push('Oracle certified');
console.log(`Last element in certificate array : ${professor.certificates[professor.certificates.length-1]}`);
