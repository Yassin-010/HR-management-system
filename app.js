function Employee(employeeID, fullName, department, level, imageURL) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    this.netSalary = 0;
}

Employee.prototype.calculateSalary = function () {
    const salaryTable = {
        "Senior": { min: 1500, max: 2000 },
        "Mid-Senior": { min: 1000, max: 1500 },
        "Junior": { min: 500, max: 1000 },
    };

    const { min, max } = salaryTable[this.level];
    this.salary = Math.floor(Math.random() * (max - min + 1)) + min;
    this.netSalary = this.salary - (this.salary * 7.5) / 100;
};

Employee.prototype.render = function () {
    const mainSection = document.querySelector("main");

    const employeeCard = document.createElement("div");
    employeeCard.classList.add("employee-card");

    const employeeName = document.createElement("h3");
    employeeName.textContent = this.fullName;

    const employeeSalary = document.createElement("p");
    employeeSalary.textContent = `Salary: $${this.salary.toFixed(2)}`;

    employeeCard.appendChild(employeeName);
    employeeCard.appendChild(employeeSalary);

    mainSection.appendChild(employeeCard);
};

const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "image-url"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", "image-url"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "image-url"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "image-url"),
    new Employee(1004, "Omar Zaid", "Development", "Senior", "image-url"),
    new Employee(1005, "Rana Saleh", "Development", "Junior", "image-url"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "image-url"),
];

employees.forEach((employee) => {
    employee.calculateSalary();
    employee.render();
});