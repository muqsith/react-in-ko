import employeesListComponent from '../components/employees-list.ko';

class EmployeesList {
    constructor() {
    }
}


ko.components.register('employees-list', {
    template: employeesListComponent,
    viewModel: EmployeesList
});

export default EmployeesList;
