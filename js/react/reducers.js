
function employeesList(state={data: []}, action) {
    switch (action.type) {
        case 'GET': {
            return { ...state, data: action.data };
        }
        case 'UPDATE': {
            return state;
        }
        case 'DELETE': {
            return state;
        }
        case 'UPDATE_LAST_NAME': {
            return { ...state, __lastName: action.lname};
        }
        default:
            return state;
    }
}

export default employeesList;
