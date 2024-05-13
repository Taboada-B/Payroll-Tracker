// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
let employeesArray = []; //an array, arrays are accesed by index
const collectEmployees = function () {
  let moreNames = true;

  while (moreNames) {
    let firstName = prompt('Enter your first name');
    let lastName = prompt('Enter your last name');
    let salary = prompt('Enter your salary');
    if (salary < 0 || isNaN(salary)) {// Convert salary to a number, default to 0 if not a valid number
      salary = 0;}
    else {
    salary = parseFloat(salary);
      }

    // Create an object with the entered data
    const employee = { //object
      firstName,  //keys
      lastName,
      salary 
    };

    // Add the employee object to the employeesArray
    employeesArray.push(employee);

    moreNames = confirm('Would you like to add more employees?');
  }

  return employeesArray;
};

// Display the average salary
// TODO: Calculate and display the average salary  
const displayAverageSalary = function () {
  let totalSalary = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: $ ${averageSalary}`);
};



// Select a random employee
const getRandomEmployee = function () {
  // TODO: Select and display a random employee
  const randIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randIndex];
console.log(`${randomEmployee.firstName} ${randomEmployee.lastName} you won the prize!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);
  //organizing by lastname
  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
