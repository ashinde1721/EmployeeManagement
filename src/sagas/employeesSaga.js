import {put} from 'redux-saga/effects';
import * as actionCreators from '../actions/actions';

export function* getemployeeSaga() {
    try {
        let employees = [{firstName: "Abhijit", lastName: "Shinde", gender: "Male", email_id: "ashinde1721@gmail.com", phone:"9812387"},
          {firstName: "Abhijit", lastName: "Shinde", gender: "Male", email_id: "ashinde1721@gmail.com", phone:"9812387"},
          {firstName: "Abhijit", lastName: "Shinde", gender: "Male", email_id: "ashinde1721@gmail.com", phone:"9812387"},
          {firstName: "Abhijit", lastName: "Shinde", gender: "Male", email_id: "ashinde1721@gmail.com" , phone:"9812387"},
          {firstName: "Abhijit", lastName: "Shinde", gender: "Male", email_id: "ashinde1721@gmail.com", phone:"9812387"},
        ]
          yield put(actionCreators.saveEmployees(employees));
        } catch(err) {
          console.warn('Error in fetchemployees -> ', err);
        }

}