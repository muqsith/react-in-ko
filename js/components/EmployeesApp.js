import employeesAppComponent from './employees-app.ko';
import './EmployeesForm';
import './EmployeesList';

import Application from '../viewmodels/Application';

import initReact from '../react/initReact';

class EmployeesApp {
    constructor() {
        this.app = new Application();
        // bootstrap react components
        initReact(app);
    }
}

ko.components.register('employees-app', {
    template: employeesAppComponent,
    viewModel: EmployeesApp
});


export default EmployeesApp;
