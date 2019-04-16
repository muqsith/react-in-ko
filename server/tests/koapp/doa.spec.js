const assert = require('assert');
const Employee = require('../../lib/koapp/EmployeeModel');
const doa = require('../../lib/koapp/doa');


describe('SQLITE3 - DOA test', function () {

    let emp = null;

    it('should add employee record', function (done) {
        const employee = new Employee();
        employee.firstName = 'Muqsith';
        employee.lastName = 'Irfan';
        employee.age = 33;
        doa.addEmployee(employee)
        .then(() => {
            done()
            assert.ok(true);
        })
        .catch((err) => {
            done(err);
        });
    });

    it('should get all employee records', function (done) {
        doa.getAllEmployees()
        .then((result) => {
            console.log(result);
            emp = result[0];
            done();
            assert.ok(true);
        })
        .catch((err) => {
            done(err);
        });
    });

    it('should update employee', function (done) {
        const employee = new Employee(emp);
        employee.firstName = 'Mohammed';
        doa.updateEmployee(employee)
        .then((result) => {
            done();
            assert.ok(true);
        })
        .catch((err) => {
            done(err);
        });
    });

    it('should get employee record by id', function (done) {
        doa.getEmployeeById(emp.id)
        .then((result) => {
            console.log(result);
            done();
            assert.ok(true);
        })
        .catch((err) => {
            done(err);
        });
    });

    after(function (done) {
        doa.deleteEmployee(emp.id)
        .then((result) => {
            done();
            assert.ok(true);
        })
        .catch((err) => {
            done(err);
        });
    });


})
