import React from 'react';
import './Employee.scss';

const employee = ({ employee, index }) => {
    const {firstName, lastName, phone, email_id} = employee;
 
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email_id}</td>
            <td>{phone}</td>
            <td><span className="edit">Edit </span> <span className="delete"> X </span></td>
        </tr>
    );
}

export default employee;