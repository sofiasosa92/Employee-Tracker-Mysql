//Dependencies
//require inquirer
const inquirer = require('inquirer')
//require mysql2
const mysql = require('mysql2')
//require console.table
const consoleTable = require('console.table')

//connecting to mysql database
const db = mysql.createConnection(
    {
        hots: 'localhost',
        port: 3001,
        user: 'root',
        password: '',
        database: 'employee_tracker',
    })

db.connect((err) => {
    if (err) throw err;
    console.log(`####CONNECTED TO DATABASE####`);

    init()
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
                    name: "View all Employees",
                    value: "view_Employees"
                },

                {
                    name: "View all Employees by Departments",
                    value: "view_Employees_by_department"
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

                case "view_Employees_by_Department":
                    viewAllEmployeesByDepartment();
                    break;

                case "view_Employees_by_Role":
                    viewAllEmployeesByRole();
                    break;

                case "view_Employees":
                    view_Employees();
                    break;

                case "view_Employees_by_department":
                    view_Employees_by_department();
                    break;

                case "add_department":
                    add_department();
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

//View all department function
function viewAllDepartments() {
    db.query(`SELECT * FROM department`, (err, data) => {
        console.table(data)
        init()
    })
}

//View all roles function
function viewAllRoles() {
    db.query(`SELECT * FROM role`, (err, data) => {
        console.table(data)
        init()
    })
}

//View all roles employees
function viewAllEmployees() {
    db.query(`SELECT * FROM employee`, (err, data) => {
        console.table(data)
        init()
    })
}

function viewAllEmployeesByDepartment() {
    db.query(`SELECT * FROM employee`, (err, data) => {
        console.table(data)
        init()
    })
}



