const path = require('path');
const fs = require('fs-extra');
const sqlite3 = require('sqlite3');
const uuidV4 = require('uuid/v4');

const Employee = require('./EmployeeModel');

const dbDir = path.resolve(__dirname, '..', '..', '..', 'data');
const dbFile = 'emp.db';
let db = null;

exports.addEmployee = function (employee) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('INSERT INTO employees (id, firstname, lastname, age) values (?, ?, ?, ?)');
        stmt.run(uuidV4(), employee.firstName, employee.lastName, employee.age);
        stmt.finalize((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

exports.getEmployeeById = function (id) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM employees WHERE id = '${id}'`, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const employees = rows.map((e) => new Employee(e));
                resolve(employees);
            }
        })
    });
};

exports.getAllEmployees = function () {
    return new Promise((resolve, reject) => {
        let selectQuery = 'SELECT * FROM employees';
        db.all(selectQuery, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const employees = rows.map((e) => new Employee(e));
                resolve(employees);
            }
        })
    });
};

exports.updateEmployee = function (employee) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare('UPDATE employees SET firstname = ?, lastname = ?, age = ? WHERE id = ?');
        stmt.run(employee.firstName, employee.lastName, employee.age, employee.id);
        stmt.finalize((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

exports.deleteEmployee = function (id) {
    return new Promise((resolve, reject) => {
        const stmt = db.prepare(`DELETE FROM employees WHERE id = ?`);
        stmt.run(id);
        stmt.finalize((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

exports.initDb = function () {
    fs.ensureDir(dbDir)
    .then(() => {
        let schemaExists = fs.existsSync(path.resolve(dbDir, dbFile));
        db = new sqlite3.Database(path.resolve(dbDir, dbFile), (err) => {
            if (err) {
                console.log('Failed to open database', err);
            } else {
                console.log('Database connection created successfully');
                if (!schemaExists) {
                    db.serialize(function() {
                        db.run('CREATE TABLE employees '
                        + '(id varchar(40) primary key, firstname varchar(40), '
                        + ' lastname varchar(40), age shortint)');
                    });
                }
            }
        });
    })
}
