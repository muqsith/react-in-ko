class Employee {
    constructor(o) {
        if (o) {
            this.id = o.id;
            this.firstName = o.firstName || o.firstname;
            this.lastName = o.lastName || o.lastname;
            this.age = o.age;
        } else {
            this.id = '';
            this.firstName = '';
            this.lastName = '';
            this.age = 0;
        }
    }
}

module.exports = Employee;
