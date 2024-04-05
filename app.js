// Employee constructor function
function Employee(employeeID, fullName, department, level, imageURL) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    this.netSalary = 0;
}

// Calculate salary for Employee
Employee.prototype.calculateSalary = function () {
    const salaryTable = {
        Senior: { min: 1500, max: 2000 },
        "Mid-Senior": { min: 1000, max: 1500 },
        Junior: { min: 500, max: 1000 },
    };

    const { min, max } = salaryTable[this.level];
    this.salary = Math.floor(Math.random() * (max - min + 1)) + min;

    this.netSalary = this.salary - (this.salary * 7.5) / 100;
};

// Render Employee information
Employee.prototype.render = function () {
    const mainSection = document.querySelector("main");

    const departmentSection = document.getElementById(this.department.toLowerCase());

    if (!departmentSection) {
        const newDepartmentSection = document.createElement("section");
        newDepartmentSection.id = this.department.toLowerCase();

        const departmentHeading = document.createElement("h2");
        departmentHeading.textContent = this.department;

        newDepartmentSection.appendChild(departmentHeading);
        mainSection.appendChild(newDepartmentSection);
    }

    const departmentContainer = document.getElementById(this.department.toLowerCase());

    const employeeCard = document.createElement("div");
    employeeCard.classList.add("employee-card");

    const employeeImage = document.createElement("img");
    employeeImage.src = `assets/${this.fullName}.jpg`;
    employeeImage.alt = "not found";
    employeeImage.height = "100";
    employeeImage.width = "100";

    const employeeName = document.createElement("h3");
    employeeName.textContent = this.fullName;

    const employeeID = document.createElement("p");
    employeeID.textContent = `Employee ID: ${this.employeeID}`;

    const employeeDepartment = document.createElement("p");
    employeeDepartment.textContent = `Department: ${this.department}`;

    const employeeLevel = document.createElement("p");
    employeeLevel.textContent = `Level: ${this.level}`;

    const employeeSalary = document.createElement("p");
    employeeSalary.textContent = `Salary: $${this.salary.toFixed(2)}`;

    const employeeNetSalary = document.createElement("p");
    employeeNetSalary.textContent = `Net Salary: $${this.netSalary.toFixed(2)}`;

    employeeCard.appendChild(employeeImage);
    employeeCard.appendChild(employeeName);
    employeeCard.appendChild(employeeID);
    employeeCard.appendChild(employeeDepartment);
    employeeCard.appendChild(employeeLevel);
    employeeCard.appendChild(employeeSalary);
    employeeCard.appendChild(employeeNetSalary);

    departmentContainer.appendChild(employeeCard);
};

// Array to store employees
let employees = [];

// Save employees to Local Storage
function saveEmployeesToLocalStorage() {
    localStorage.setItem("employees", JSON.stringify(employees));
}

// Retrieve employees from Local Storage
function retrieveEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem("employees");

    if (storedEmployees) {
        employees = JSON.parse(storedEmployees);
        employees.forEach((employee) => {
            const newEmployee = new Employee(
                employee.employeeID,
                employee.fullName,
                employee.department,
                employee.level,
                employee.imageURL
            );
            newEmployee.salary = employee.salary;
            newEmployee.netSalary = employee.netSalary;
            newEmployee.render();
        });
    }
}

// Generate a unique employee ID
function generateEmployeeID() {
    const existingIDs = employees.map((employee) => employee.employeeID);
    let newID;

    do {
        newID = Math.floor(1000 + Math.random() * 9000);
    } while (existingIDs.includes(newID));

    return newID;
}

// Add event listener to the employee form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("employee-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const fullName = document.getElementById("full-name").value;
        const department = document.getElementById("department").value;
        const level = document.getElementById("level").value;
        const imageURL = document.getElementById("image-url").value;

        const employee = new Employee(generateEmployeeID(), fullName, department, level, imageURL);
        employee.calculateSalary();
        employee.render();

        employees.push(employee);
        // Save employees to Local Storage
        saveEmployeesToLocalStorage();

        // Clear form fields after submission
        document.getElementById("employee-form").reset();
    });

    // Retrieve employees from Local Storage
    retrieveEmployeesFromLocalStorage();
});