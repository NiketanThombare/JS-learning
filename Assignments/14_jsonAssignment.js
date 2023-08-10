console.log('-------------------step-1-------------------');
let jsonEmployee=`{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","Dba"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, Laham st.",
        "city" : "Innsbruck",
        "country ": "Austria"
         },
     "reffered-by":"E0012"
}`

console.log('-------------------step-2-------------------');
//console.log(typeof jsonEmployee);
let objectEmployee=JSON.parse(jsonEmployee);
//console.log(objectEmployee);
//console.log(typeof objectEmployee);

console.log('-------------------step-3-------------------');
  let roleAT0=objectEmployee.role[0];
  console.log(`accessing the Role : ${roleAT0}`);

  console.log('-------------------step-4-------------------');
  let splitedName=objectEmployee.name.split(" ");
  console.log(`accessing the name : ${splitedName[1]}`);

  console.log('-------------------step-5-------------------');
  let dojString=objectEmployee.doj;
  let date=new Date(dojString);
  console.log(`accessing the doj year only : ${date.getFullYear()}`);
  