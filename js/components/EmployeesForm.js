import employeesFormComponent from './employees-form.ko'
import * as api from '../dal/transport';


class EmployeesForm {
    constructor(app) {
        this.app = app;
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee() {
        if (this.app.form.id()) {
            this.app.form.updateEmployee();
        } else {
            this.app.form.addEmployee();
        }
    }
}


ko.components.register('employees-form', {
    template: employeesFormComponent,
    viewModel: EmployeesForm
});

export default EmployeesForm;
