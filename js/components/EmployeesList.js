import employeesListComponent from './employees-list.ko';


class EmployeesList {
    constructor(app) {
        this.app = app;
        this.app.list.load();

        this.updateEmp = this.updateEmp.bind(this);
        this.deleteEmp = this.deleteEmp.bind(this);
    }

    updateEmp(empId) {
        const employeee = this.app.list.data().find((e) => e.id === empId);
        this.app.form.loadForm(employeee);
    }

    deleteEmp(empId) {
        const employeee = this.app.list.data().find((e) => e.id === empId);
        this.app.form.deleteEmployee(employeee);
    }
}


ko.components.register('employees-list', {
    template: employeesListComponent,
    viewModel: EmployeesList
});

export default EmployeesList;
