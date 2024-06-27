INSERT INTO department (name)
VALUES ('Shipping'),
       ('Receiving'),
       ('Accounting'),
       ('Marketing');


INSERT INTO role (title, salary, department)
VALUES  ('Foreman', 30.50, 1),
        ('Stocker', 15.00, 1),
        ('Bookkeeper', 20.00, 3),
        ('Sales Manager', 35.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Greg', 'Bailey', 1, 1),
        ('Todd', 'Etta', 2, null),
        ('Alvin', 'Nikolia', 3, null),
        ('Courtney', 'Raymond', 4, 2);



SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employee;

       
