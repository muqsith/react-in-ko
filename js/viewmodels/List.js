import * as storeHelper from '../react/storeHelper';
import * as actions from '../react/actions';


class List {
    constructor(app) {

    }

    load() {
        storeHelper.getStore().dispatch(actions.getEmployees());
    }

}

export default List;
