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

    const employeeImage = document.createElement("img");
    employeeImage.src = this.imageURL;
    employeeImage.alt = this.fullName;
    employeeImage.height = "100"
    employeeImage.width = "100"




    employeeCard.appendChild(employeeImage);
    employeeCard.appendChild(employeeName);
    employeeCard.appendChild(employeeID);
    employeeCard.appendChild(employeeDepartment);
    employeeCard.appendChild(employeeLevel);
    employeeCard.appendChild(employeeSalary);
    employeeCard.appendChild(employeeNetSalary);

    mainSection.appendChild(employeeCard);
};

const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", "https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"),
    new Employee(1004, "Omar Zaid", "Development", "Senior", "https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"),
    new Employee(1005, "Rana Saleh", "Development", "Junior", "https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://static.vecteezy.com/system/resources/previews/004/274/186/original/person-icon-user-interface-icon-silhouette-of-man-simple-symbol-a-glyph-symbol-in-your-web-site-design-logo-app-ui-webinar-video-chat-ect-vector.jpg"),
];

employees.forEach((employee) => {
    employee.calculateSalary();
    employee.render();
});