import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadEmployees();
    }

    render() {
        return (
            <div className="employees-list">
                <h2>Rendered with react</h2>
                {
                    (Array.isArray(this.props.data) && this.props.data.length) ?
                        <div>
                        <table>
                        <thead>
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Age</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.data.map((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{e.firstName}</td>
                                            <td>{e.lastName}</td>
                                            <td>{e.age}</td>
                                            <td><button
                                                className="update-btn"
                                                onClick={this.props.handleUpdateEmployee.bind(null, e)}>Update</button></td>
                                            <td><button
                                                className="del-btn"
                                                onClick={this.props.handleDeleteEmployee.bind(null, e)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <span>{this.props.__lastName}</span>
                    </div> : null
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return ({
        loadEmployees: function () {
            dispatch(actions.getEmployees());
        },
        handleUpdateEmployee: function(employee) {
            dispatch(actions.updateEmployee(employee));
        },
        handleDeleteEmployee: function(employee) {
            dispatch(actions.deleteEmployee(employee))
        }
    });
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
