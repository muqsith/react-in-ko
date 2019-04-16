import employeesAppComponent from '../components/employees-app.ko';
import './EmployeesForm';
import './EmployeesList';

class EmployeesApp {
    constructor() {
    }
}

ko.components.register('employees-app', {
    template: employeesAppComponent,
    viewModel: EmployeesApp
});


export default EmployeesApp;
