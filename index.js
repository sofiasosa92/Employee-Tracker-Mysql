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


//Initial prompt
const question = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "View all Employees by Department",
            "View all Employees by Roles",
            "View all Employees",
            "View all Employees by Department",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Exit"]
    }
];

//Function to start application
inquirer
    .prompt(question)
    .then(answers => {
        switch (answers.choice) {
            case "View all Departments":
                viewAllDepartments();
                console.log("View all departments...");
                break;

            case "View all Roles":
                viewAllRoles();
                console.log("View all roles...");
                break;

            case "View all Employees":
                viewAllEmployees();
                console.log("View all employess...");
                break;

        }
    })

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



