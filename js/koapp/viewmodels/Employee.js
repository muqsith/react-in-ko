class Employee {
    constructor() {
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
        this.dob = ko.observable();
        this.address = {
            flat: ko.observable(''),
            building: ko.observable(''),
            street: ko.observable(''),
            city: ko.observable(''),
            state: ko.observable(''),
            country: ko.observable('')
        }
    }
}

export default Employee;