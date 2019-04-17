const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const Employee = require('./EmployeeModel');
const doa = require('./doa');

function addUpdate (op, data) {
    const employee = new Employee();
    employee.id = data.id;
    employee.firstName = data.firstName;
    employee.lastName = data.lastName;
    employee.age = data.age;
    if (op === 'ADD') {
        return doa.addEmployee(employee)
    } else if (op === 'UPDATE') {
        return doa.updateEmployee(employee);
    }
}

doa.initDb();

router
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.get('/', (req, res, next) => {
    return doa.getAllEmployees()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        if (err) {
            next(createError(500, err.message));
        } else {
            next();
        }
    });
})
.post('/', (req, res, next) => {
    const data = req.body;
    return addUpdate('ADD', data)
    .then((result) => {
        res.json({'status' : 'ok'});
    })
    .catch((err) => {
        if (err) {
            next(createError(500, err.message));
        } else {
            next();
        }
    });
})
.put('/', (req, res, next) => {
    const data = req.body;
    return addUpdate('UPDATE', data)
    .then((result) => {
        res.json({'status' : 'ok'});
    })
    .catch((err) => {
        if (err) {
            next(createError(500, err.message));
        } else {
            next();
        }
    });
})
.delete('/', (req, res, next) => {
    return doa.deleteEmployee(req.body.id)
    .then((result) => {
        res.json({'status' : 'ok'});
    })
    .catch((err) => {
        if (err) {
            next(createError(500, err.message));
        } else {
            next();
        }
    });
});

module.exports = router;
