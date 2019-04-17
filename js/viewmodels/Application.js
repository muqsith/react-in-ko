import Form from './Form';
import List from './List';

class Application {
    constructor() {
        this.form = new Form(this);
        this.list = new List(this);
    }
}

export default Application;
