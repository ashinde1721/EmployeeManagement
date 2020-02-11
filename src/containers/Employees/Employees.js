import React, { Component } from 'react';
import Employee from '../../components/Employee/Employee';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'

class employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            period: 7,
            err: false
        };
    }

    goToAddEmployee = () => {
        this.props.history.push(`/employee/add`);
    }

    render() {
        let employees = [...this.props.employeeList];
        if (this.props.search) {
            employees = this.props.employeeList.filter(employee => {
                if (employee.firstName.toLowerCase().includes(this.props.search.toLowerCase())) {
                    return employee;
                }
                return null;
            })
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12"> 
                            <div className="text-right">
                                <button type="button"  onClick={this.goToAddEmployee} className="btn btn-primary">
                                    Add Employee
                                </button>
                            </div>
                        </div>
                    </div>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => {
                            return (
                                <Employee key={index}  index={index} employee={employee} />
                            );
                        })
                    }
                </tbody>
                </table>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.search,
        employeeList: state.employeeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchemployees: () => dispatch(actionCreators.fetchemployees())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(employees);
