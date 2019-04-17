import * as api from '../dal/transport';

class Form {
    constructor(app) {
        this.app = app;
        this.id = ko.observable('');
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
        this.age = ko.observable();

        this.addEmployee = this.addEmployee.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    clearForm() {
        this.firstName('');
        this.lastName('');
        this.age('');
    }

    loadForm(employee) {
        this.id(employee.id);
        this.firstName(employee.firstName);
        this.lastName(employee.lastName);
        this.age(employee.age);
    }

    addEmployee() {
        return api.addEmployee({
            firstName: this.firstName(),
            lastName: this.lastName(),
            age: this.age()
        })
        .then(() => {
            this.clearForm();
            this.app.list.load();
            console.log('Added employee');
        })
        .catch((err) => {
            console.error('Failed to add employee', err);
        });
    }

    updateEmployee() {
        return api.updateEmployee({
            id: this.id(),
            firstName: this.firstName(),
            lastName: this.lastName(),
            age: this.age()
        })
        .then(() => {
            this.clearForm();
            this.app.list.load();
            console.log('Updated employee');
        })
        .catch((err) => {
            console.error('Failed to update employee', err);
        });
    }

    deleteEmployee(employee) {
        return api.deleteEmployee({
            id: employee.id
        })
        .then(() => {
            this.app.list.load();
            console.log('Deleted employee');
        })
        .catch((err) => {
            console.error('Failed to delete employee', err);
        });
    }
}

export default Form;
