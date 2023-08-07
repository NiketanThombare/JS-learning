class Vehicle{
    name;
    model;
    color;
    price;
    company;

    constructor(name,model,color,price,company){
     this.name=name;
     this.model=model;
     this.color=color;
     this.price=price;
     this.company=company;
    }
}

let vehicle1=new Vehicle("bike","FZ_S","red-black",150000,"Yamaha");
let vehicle2=new Vehicle("bike","CBZ-Extreme","black",140000,"Hero");
let vehicle3=new Vehicle("Car","Nexon","black",1100000,"TATA");
let vehicle4=new Vehicle("bike","Splendor","red-black",100000,"Hero");
let vehicle5=new Vehicle("Moped","Activa","white",140000,"Honda");

let arrOfVehicle=[vehicle1,vehicle2,vehicle3,vehicle4,vehicle5];

console.log('------------step 1------------------------');
for (const vehicle of arrOfVehicle) {
    console.log(`Vehicle details : Vehicle name-${vehicle.name}, Vehicle Model-${vehicle.model}, Vehicle colour-${vehicle.color}, Vehicle Price-${vehicle.price}, Vehicle company-${vehicle.company} `);
}


console.log('------------step 2------------------------');

class College{
    id;
    name;
    university;
    fees;
    city;

    constructor(id,name,university,fees,city){
        this.id=id;
        this.name=name;
        this.university=university;
        this.fees=fees;
        this.city=city;
    }

    display(){
        console.log(`College Details : College Id-${this.id},  College Name-${this.name},  College university-${this.university},  College fees-${this.fees},  College city-${this.city}, `);
    }
}

let college1=new College(101,"YCC","RTMNU",150000,"nagpur");
college1.display();
let college2=new College(201,"COEP","Autonomus",170000,"Pune");
college2.display();
let college3=new College(301,"PCE","RTMNU",114000,"Nagpur");
college3.display();
let college4=new College(401,"DY Patil","SFPU",130000,"Pune");
college4.display();
let college5=new College(501,"RamdevBaba","RTMNU",190000,"Nagpur");
college5.display();

console.log('------------step 3------------------------');

function traverseObject(collegeObject) {

    console.log(`----------Traversing an object ------------ `);
     for (const key in collegeObject) {
    if (Object.hasOwnProperty.call(collegeObject, key)) {
        const element = collegeObject[key];
        console.log(`Key: ${key}, value : ${element}`); 
    }
}
    
}
traverseObject(college1);
traverseObject(college2);
traverseObject(college3);
traverseObject(college4);
traverseObject(college5);

console.log("----------Step4 -PRIME NUMBER-------------------");


  function checkPrimeNumber(num){
    let count=0;
    
        for (let i = 1; i <= num; i++) {
            if (num % i == 0 && num>1 ) {
                count++;
            }
        }
        if (count == 2) {
            console.log(`${num} :is a prime no`);
        
        } else {
            console.log(`${num} :is not a prime no`);
        }
    }
   
 checkPrimeNumber(19);