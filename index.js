//Dependencies
//require inquirer
const inquirer = require('inquirer')
//require mysql2
const mysql = require('mysql2')
//require console.table
const consoleTable = require('console.table')

//connecting to mysql
const db = mysql.createConnection(
    {
        hots:'localhost',
        port: 3001,
        user: 'root',
        password:'',
        database:'employee_tracker',
    })
//Connection 
    db.connect((err) => {
        if (err) throw err;
        console.log(`####CONNECTED TO DATABASE####`);

        startPrompt()
    })
//Initial prompt
function startPrompt()
    

