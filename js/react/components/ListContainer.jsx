import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Here is the list rendered by react</div>
        )
    }
}


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return ({
        handleUpdateEmployee: function(e) {
            dispatch(actions.updateEmployee());
        },
        handleDeleteEmployee: function(e) {
            dispatch(actions.deleteEmployee())
        }
    });
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
