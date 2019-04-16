import employeesListComponent from '../components/employees-list.ko';

class EmployeeList {

    constructor(params) {
        this.firstName = params.firstName;
    }

}


ko.components.register('employees-list', {
    template: employeesListComponent,
    viewModel: EmployeeList
});
