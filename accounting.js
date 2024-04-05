function renderDepartmentTable(employees) {
    const departments = {};
  
    // Calculate department statistics
    for (const employee of employees) {
      const department = employee.department.toLowerCase();
      if (!departments[department]) {
        departments[department] = {
          count: 0,
          totalSalary: 0,
        };
      }
  
      departments[department].count++;
      departments[department].totalSalary += employee.salary;
    }
  
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    const tableFooter = document.createElement("tfoot");
  
    // Table Header
    const headerRow = document.createElement("tr");
    const departmentHeader = document.createElement("th");
    departmentHeader.textContent = "Department Name";
    const employeeCountHeader = document.createElement("th");
    employeeCountHeader.textContent = "# of Employees";
    const totalSalaryHeader = document.createElement("th");
    totalSalaryHeader.textContent = "Total Salary";
    const averageSalaryHeader = document.createElement("th");
    averageSalaryHeader.textContent = "Average Salary";
  
    headerRow.appendChild(departmentHeader);
    headerRow.appendChild(employeeCountHeader);
    headerRow.appendChild(totalSalaryHeader);
    headerRow.appendChild(averageSalaryHeader);
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
  
    // Table Body
    for (const department in departments) {
      const departmentRow = document.createElement("tr");
      const departmentNameCell = document.createElement("td");
      departmentNameCell.textContent = department;
      const employeeCountCell = document.createElement("td");
      employeeCountCell.textContent = departments[department].count;
      const totalSalaryCell = document.createElement("td");
      totalSalaryCell.textContent = `$${departments[department].totalSalary.toFixed(2)}`;
      const averageSalaryCell = document.createElement("td");
      const averageSalary = departments[department].totalSalary / departments[department].count;
      averageSalaryCell.textContent = `$${averageSalary.toFixed(2)}`;
  
      departmentRow.appendChild(departmentNameCell);
      departmentRow.appendChild(employeeCountCell);
      departmentRow.appendChild(totalSalaryCell);
      departmentRow.appendChild(averageSalaryCell);
      tableBody.appendChild(departmentRow);
    }
  
    table.appendChild(tableBody);
  
    // Table Footer
    const footerRow = document.createElement("tr");
    const footerDepartmentCell = document.createElement("td");
    footerDepartmentCell.colSpan = 4;
    const totalEmployeesCell = document.createElement("td");
    totalEmployeesCell.textContent = "Total number of employees";
    const totalEmployeesCountCell = document.createElement("td");
    const totalSalaryCell = document.createElement("td");
    totalSalaryCell.textContent = "Total salary for all departments";
    const totalSalaryAmountCell = document.createElement("td");
    const averageSalaryCell = document.createElement("td");
    averageSalaryCell.textContent = "Average salary for all departments";
    const averageSalaryAmountCell = document.createElement("td");
  
    let totalEmployees = 0;
    let totalSalary = 0;
  
    for (const department in departments) {
      totalEmployees += departments[department].count;
      totalSalary += departments[department].totalSalary;
    }
  
    totalEmployeesCountCell.textContent = totalEmployees;
    totalSalaryAmountCell.textContent = `$${totalSalary.toFixed(2)}`;
    averageSalaryAmountCell.textContent = `$${(totalSalary / totalEmployees).toFixed(2)}`;
  
    footerRow.appendChild(footerDepartmentCell);
    footerRow.appendChild(totalEmployeesCell);
    footerRow.appendChild(totalEmployeesCountCell);
    footerRow.appendChild(totalSalaryCell);
    footerRow.appendChild(totalSalaryAmountCell);
    footerRow.appendChild(averageSalaryCell);
    footerRow.appendChild(averageSalaryAmountCell);
    tableFooter.appendChild(footerRow);
    table.appendChild(tableFooter);
  
    // Remove previous department table if it exists
    const existingTable = document.getElementById("department-table");
    if (existingTable) {
      existingTable.remove();
    }
  
    // Append the table to the main section
    const mainSection = document.querySelector("main");
    table.id = "department-table";
    mainSection.appendChild(table);
  }

// Retrieve the employees array from local storage
const employees = JSON.parse(localStorage.getItem('employees'));

// Check if the employees array exists
if (employees) {
  // Call the renderDepartmentTable function with the employees array
  renderDepartmentTable(employees);
} else {
  // Handle the case when the employees array is not found in local storage
  console.log('Employees array not found in local storage.');
}
