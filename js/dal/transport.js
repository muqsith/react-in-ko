import fetch from 'isomorphic-fetch';


export const addEmployee = (data) => {
    return fetch('/api/koapp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const getEmployees = () => {
    return fetch('/api/koapp').then((response) => response.json());
};

export const updateEmployee = (data) => {
    return fetch('/api/koapp', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const deleteEmployee = (data) => {
    return fetch('/api/koapp', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
