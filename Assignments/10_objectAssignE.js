let sbiBank={
     bankName:"SBI",
     location :"Pune",
     accountNo:147258369,
     ifsc:"sbi963852741",
     interestRate:8.59,
     showdetails:function(){
        console.log(`SBI : ${sbiBank.bankName},${sbiBank.location},${sbiBank.accountNo},${sbiBank.ifsc},${sbiBank.interestRate}`);
        }
    }

let axisBank={
    bankName:"AXIS BANK",
    location :"Mumbai",
    accountNo:159357456,
    ifsc:"axis789456123",
    interestRate:9.23,
    showdetails:function(){
        console.log(`AXIS : ${axisBank.bankName},${axisBank.location},${axisBank.accountNo},${axisBank.ifsc},${axisBank.interestRate}`);
     }
}

let hdfcBank={
    bankName:"HDFC",
    location :"Nagpur",
    accountNo:963852741,
    ifsc:"hdfc48621793",
    interestRate:9.89,
    showdetails:function(){
        console.log(`HDFC : ${hdfcBank.bankName},${hdfcBank.location},${hdfcBank.accountNo},${hdfcBank.ifsc},${hdfcBank.interestRate}`);
     }
}

let yesBank={
    bankName:"YES BANK",
    location :"Kolkata",
    accountNo:763985214,
    ifsc:"yes123456987",
    interestRate:9.54,
    showdetails:function(){
        console.log(`YES : ${yesBank.bankName},${yesBank.location},${yesBank.accountNo},${yesBank.ifsc},${yesBank.interestRate}`);
     }
    
}
console.log(`------------------SBI BANK--------------------`);
sbiBank.showdetails();
console.log(`------------------AXIS BANK--------------------`);
axisBank.showdetails();
console.log(`------------------HDFC BANK--------------------`);
hdfcBank.showdetails();
console.log(`------------------YES BANK--------------------`);
yesBank.showdetails();
