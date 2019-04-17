import * as api from '../dal/transport';


class List {
    constructor(app) {
        this.app = app;
        this.data = ko.observableArray();
    }

    load() {
        return api.getEmployees()
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.data(result);
        })
        .catch((err) => {
            console.error('Failed to load employees data', err);
        })
    }

}

export default List;
