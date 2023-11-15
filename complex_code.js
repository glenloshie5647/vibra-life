/* 
Filename: complex_code.js
Description: This code is a complex implementation of a payroll management system in JavaScript.
*/

// Define Employee class
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
  }
}

// Define Payroll class
class Payroll {
  constructor() {
    this.employees = [];
    this.totalSalary = 0;
  }

  addEmployee(employee) {
    this.employees.push(employee);
    this.totalSalary += employee.salary;
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.totalSalary -= employee.salary;
      this.employees.splice(index, 1);
    }
  }

  getNumberOfEmployees() {
    return this.employees.length;
  }

  getTotalSalary() {
    return this.totalSalary;
  }

  getEmployeeByName(name) {
    return this.employees.find(employee => employee.name === name);
  }

  getAverageSalary() {
    const numberOfEmployees = this.getNumberOfEmployees();
    return numberOfEmployees === 0 ? 0 : this.totalSalary / numberOfEmployees;
  }

  getEmployeesWithAgeAbove(age) {
    return this.employees.filter(employee => employee.age > age);
  }
}

// Create new payroll
const payroll = new Payroll();

// Add employees
payroll.addEmployee(new Employee("John Doe", 30, 4000));
payroll.addEmployee(new Employee("Jane Smith", 25, 3500));
payroll.addEmployee(new Employee("Bob Johnson", 45, 5000));
payroll.addEmployee(new Employee("Alice Williams", 35, 4500));

// Remove an employee
const employeeToRemove = payroll.getEmployeeByName("Jane Smith");
payroll.removeEmployee(employeeToRemove);

// Print the payroll summary
console.log(`Total employees: ${payroll.getNumberOfEmployees()}`);
console.log(`Total salary: $${payroll.getTotalSalary()}`);
console.log(`Average salary: $${payroll.getAverageSalary()}`);
console.log("Employees with age above 40:");
payroll
  .getEmployeesWithAgeAbove(40)
  .forEach(employee => console.log(employee.getDetails()));

// Output:
// Total employees: 3
// Total salary: $13500
// Average salary: $4500
// Employees with age above 40:
// Name: Bob Johnson, Age: 45, Salary: 5000