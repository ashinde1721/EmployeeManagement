import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions'

class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "Name Cannot be empty";
        }

        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z]{6,10}$/)) {
                formIsValid = false;
                errors["firstName"] = "Name should have minimum 6 and  maximum 10 letters";
            }
        }

        //lastName 
        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "Last Name Cannot be empty";
        }

        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z]{6,10}$/)) {
                formIsValid = false;
                errors["lastName"] = "LastName should have minimum 6 and  maximum 10 letters";
            }
        }

        //Email
        if (!fields["email_id"]) {
            formIsValid = false;
            errors["email_id"] = "Cannot be empty";
        }

        if (typeof fields["email_id"] !== "undefined") {
            let lastAtPos = fields["email_id"].lastIndexOf('@');
            let lastDotPos = fields["email_id"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email_id"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email_id"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email_id"] = "Email is not valid";
            }
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[9|8][0-9]{7}$/)) {
                formIsValid = false;
                errors["phone"] = "Invalid phone number";
            }
        }

        if (!fields["gender"]) {
            formIsValid = false;
            errors["gender"] = "Cannot be empty";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            let employees = [...this.props.employeeList];
            debugger;
            employees.push(this.state.fields);
            this.props.saveEmployees(employees);
            this.props.history.push(`/employee`);
        } 

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="info text-center"> Add Employee</div>
                    <div className="col-md-6 offset-md-3">
                    <form name="contactform" className="contactform" onSubmit={this.contactSubmit.bind(this)}>
                            <div className="form-group">
                                <input ref="firstName" className="form-control" type="text" size="30" placeholder="First Name" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"] || ''} />
                                <div style={{ color: "red" }}>{this.state.errors["firstName"]}</div>
                            </div>
                            <div className="form-group">
                                <input ref="lastName" className="form-control" type="text" size="30" placeholder="Last Name" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"] || ''} />
                                <div style={{ color: "red" }}>{this.state.errors["lastName"]}</div>
                            </div>
                            <div className="form-group">
                                <input refs="email_id" className="form-control" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email_id")} value={this.state.fields["email_id"] || ''} />
                                <div style={{ color: "red" }}>{this.state.errors["email_id"]}</div>
                            </div>
                            <div className="form-group">
                                <input refs="phone" className="form-control" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"] || ''} />
                                <div style={{ color: "red" }}>{this.state.errors["phone"]}</div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input refs="gender" className="form-check-input" type="radio" name="gender"
                                        value={'Male'} id="Male"
                                        checked={this.state.fields["gender"] === 'Male'}
                                        onChange={this.handleChange.bind(this, "gender")} />
                                    <label className="form-check-label" >
                                        Male
                                </label>
                                </div>

                                <div className="form-check">
                                    <input refs="gender" id="Female" className="form-check-input" type="radio" name="gender"
                                        value={'Female'}
                                        checked={this.state.fields["gender"] === 'Female'}
                                        onChange={this.handleChange.bind(this, "gender")} />
                                    <label className="form-check-label" >
                                        Female
                                </label>
                                </div>
                                <div style={{ color: "red" }}>{this.state.errors["gender"]}</div>

                            </div>

                            <div className="Form-group text-center">
                                <button type="submit    " className="btn btn-primary" id="submit" value="Submit">Submit</button>
                            </div>
                        
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        employeeList: state.employeeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveEmployees: (employeeList) => dispatch(actionCreators.saveEmployees(employeeList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)