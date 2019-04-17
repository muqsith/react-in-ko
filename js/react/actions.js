import * as api from '../dal/transport';

let koApp = null;

export const initActions = (app) => {
    koApp = app;
};


export const getEmployees = () => {
    return function (dispatch) {
        return api.getEmployees()
        .then((result) => {
            dispatch(receiveEmployees(result));
        })
        .catch((err) => {
            console.log('Failed to get employees data', err);
        });
    }
};

export const receiveEmployees = (data) => {
    return {
        type: 'GET',
        data
    }
};

export const updateEmployee = (employee) => {
    koApp.form.loadForm(employee);
    return {
        type: 'UPDATE'
    }
};
export const deleteEmployee = (employee) => {
    koApp.form.deleteEmployee(employee);
    return {
        type: 'DELETE'
    };
};
