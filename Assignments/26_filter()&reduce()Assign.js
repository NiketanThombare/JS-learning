class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];

  console.log(`---------------step 1---------------------`);

  const employeeWipro = arrayEmployees.filter((employee) => {
    return employee.emp_company === "Wipro";
  });

  for (const employee of employeeWipro) {
    console.log(
      `Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}`
    );
  }

  console.log(`---------------step 2---------------------`);

  let hrItDep = arrayEmployees.filter((employee) => {
    return employee.emp_dept == "HR" || employee.emp_dept =="IT";
  });

  for (const employee of hrItDep) {
    console.log(
      `Dept Name: ${employee.emp_dept}, Employee Name: ${employee.emp_name}`
    );
  }

  console.log(`---------------step 3---------------------`);
  
  let empId50 = arrayEmployees.filter((employee) => {
    return employee.emp_id>50;
  });

  for (const employee of empId50) {
    console.log(
      `emp id: ${employee.emp_id}, Employee Name: ${employee.emp_name}`
    );
  }

  console.log(`---------------step 4---------------------`);
  
  let empAVM = arrayEmployees.filter((employee) => {
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");
  });

  for (const employee of empAVM) {
    console.log(
      `emp id: ${employee.emp_id}, Employee Name: ${employee.emp_name}`
    );
  }

  
  console.log(`---------------step 5---------------------`);
  
  let allSal = arrayEmployees.reduce((RunningTotal, employee) => {
    return RunningTotal + employee.emp_salary;
  },0);
  console.log(
    "Average salary of All Dep Employee is : " + allSal / arrayEmployees.length
  );

  console.log(`-----------------------step 6-------------------`);
const empIT = arrayEmployees.filter((employee) => {
  return employee.emp_dept === "IT";
});
let totalSSal = empIT.reduce((runningTotal, employee2) => {
  return runningTotal + employee2.emp_salary;
},0);
console.log(
  "Average salary of IT Employee is : " + totalSSal / empIT.length
);