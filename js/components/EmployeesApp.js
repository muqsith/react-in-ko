import employeesAppComponent from './employees-app.ko';
import './EmployeesForm';
import './EmployeesList';

import Application from '../viewmodels/Application';

class EmployeesApp {
    constructor() {
        this.app = new Application();
    }
}

ko.components.register('employees-app', {
    template: employeesAppComponent,
    viewModel: EmployeesApp
});


export default EmployeesApp;
