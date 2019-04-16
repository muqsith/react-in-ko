import employeesFormComponent from '../components/employees-form.ko'


class EmployeesForm {
    constructor() {
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
        this.age = ko.observable();

        this.submit = this.submit.bind(this);
    }

    submit() {
        console.log(this.firstName(), this.lastName(), this.age());
    }
}


ko.components.register('employees-form', {
    template: employeesFormComponent,
    viewModel: EmployeesForm
});

export default EmployeesForm;
