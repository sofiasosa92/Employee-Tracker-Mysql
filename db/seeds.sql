INSERT INTO department (name)
VALUES ("Technology"), ("Business"), 
("Curriculum"),
("Transportation");

INSERT INTO role
(title, salary, department_id)
VALUES ("Network Systems Engineer", 80000, 1),
("Computer Technician", 70000, 1),
("Technology", 60000, 1), 
 ("Accounts Payable", 50000, 2),
 ("Benefits Coordinator", 60000, 2),
 ("Payroll", 70000, 2),
 ("Purchasing", 60000, 2),
 ("Math Specialist", 60000, 3),
 ("ELAR Specialist", 70000, 3),
 ("Science Specialist", 40000, 3),
 ("Transportation Director", 60000, 4),
 ("Transportation Director Asst.", 30000, 4);
 
INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES 
("Sonia", "Sosa", 1),
("Luz", "Muniz", 7),
("Jaime", "Tellez", 3),
("Daniel", "Halerumal", 6),
("Nala", "Burns", 8),
("Penelope", "Wallace", 2),
("Austin", "Leon", 5),
("Damien", "Perez", 9),
("Luca", "Abrego", 4),
("Faith", "Cason", 11),
("Stefania", "Janka", 10),
("Aki", "Ingram", 12);

