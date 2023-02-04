//Dependencies
//require inquirer
const inquirer = require('inquirer')
//require mysql2
const mysql = require('mysql2')
//require console.table
const consoleTable = require('console.table')
//require .env file
require('dotenv').config()

//connecting to mysql database
const db = mysql.createConnection(
    {
        hots: process.env.HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

db.connect((err) => {
    if (err) throw err;
    console.log(`####CONNECTED TO DATABASE####`);
    init();
})

function init() {
    loadMainPrompts();
}

function loadMainPrompts() {
    prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "choice",
            choices: [
                {
                    name: "View all Departments",
                    value: "view_Departments"
                },

                {
                    name: "View all Roles",
                    value: "view_Roles"
                },

                {
                    name: "View all Employees",
                    value: "view_Employees"
                },

                {
                    name: "View all Employees by Department",
                    value: "view_Employees_by_Department"
                },

                {
                    name: "View all Employees by Role",
                    value: "view_Employees_by_Role"
                },

                {
                    name: "Add Department",
                    value: "add_department"
                },

                {
                    name: "Remove Department",
                    value: "remove_department"
                },

                {
                    name: "Add Role",
                    value: "add_role"
                },

                {
                    name: "Add Employee",
                    value: "add_employee"
                },

                {
                    name: "Remove Employee",
                    value: "remove_employee"
                },

                {
                    name: "Update Employee Role",
                    value: "Update_employee_role"
                },

                {
                    name: "Exit",
                    value: "Exit"
                }
            ]
        }
    ])

        //Calling function depending on the choice
        .then(answers => {
            let choice = answers.choice;
            switch (choice) {
                case "view_Departments":
                    viewAllDepartments();
                    break;

                case "View_all_Roles":
                    viewAllRoles();
                    break;

                case "View_all_Employees":
                    viewAllEmployees();
                    break;

                case "add_department":
                    add_department();
                    break;

                case "remove_department":
                    remove_department();
                    break;

                case "add_role":
                    add_role();
                    break;

                case "add_employee":
                    add_employee();
                    break;

                case "remove_employee":
                    remove_employee();
                    break;

                case "Update_employee_role":
                    update_employee_role();
                    break;

                case "Exit":
                    exit();
                    break;
            }
        });
}

//View all departments
function viewAllDepartments() {
    db.query(`SELECT * FROM department`, function (err, data) {
        console.table(data);
        init();
    });
}

//View all roles
function viewAllRoles() {
    db.query(`SELECT * FROM role`, function (err, data) {
        console.table(data);
        init();
    });
}

//View all employees
function viewAllEmployees() {
    db.query(`SELECT * FROM employee`, function (err, data) {
        console.table(data);
        init();
    });
}


//Add department 
function add_department() {    
    inquirer.prompt(questions.add_department).then(data =>
        {
        db.query(`INSERT INTO department (name) VALUES (?)`, [data.departmentName], function (err, results) {
            console.log(`${data.departmentName}  Created`);
            viewALLDepartments();
        });
        });
}


//Remove department

//Add role 
function add_role() {    
    inquirer.prompt(questions.add_role).then(data =>
        {
        db.query(`INSERT INTO role (title, salary, deparment_id) VALUES (?, ?, ?)`, [data.newRole], function (err, results) {
            console.log(`${data.newRole}  Created`);
            viewAllRoles();
        });
        });
}
//Add employee
function add_employee() {    
    inquirer.prompt(questions.add_employee).then(data =>
        {
        db.query(`INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)`, [data.newEmployee], function (err, results) {
            console.log(`${data.newEmployee}  Created`);
            viewAllEmployees();
        });
        });
}
//Remove employee

//Update employee role

//Exit






