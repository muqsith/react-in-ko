
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
        default:
            return state;
    }
}

export default employeesList;
