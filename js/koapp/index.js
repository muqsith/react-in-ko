import '../../css/koapp.css';

import './viewmodels/EmployeesList';

const viewModel = {
    personName: ko.observable('Bob')
};

ko.applyBindings(viewModel, document.querySelector('#app'));
