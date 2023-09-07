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
const emp_radha = new Employee(33, "Radha", "HR", 74080, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_gonika = new Employee(77, "Monika", "IT", 48080, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75808, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85101, "Infy");

console.log('--------------------step 1---------------------------------------------');
const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_gonika,emp_viny,emp_mahi];

let newArray=arrayEmployees.map((employee)=>{
  return employee.emp_name;
})
console.log(newArray);

console.log('--------------------step 2---------------------------------------------');

let newArray2=arrayEmployees.map((employee)=>{
    return employee.emp_dept;
  })
  let uniqueDepartment=[...new Set(newArray2)];
  console.log(uniqueDepartment);

  console.log('--------------------step 3---------------------------------------------');

  let newArray3=arrayEmployees.map((employee)=>{
    return employee.emp_id;
  })
  console.log(newArray3);