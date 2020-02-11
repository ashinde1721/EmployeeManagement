import { takeEvery } from "redux-saga/effects";

import * as actionCreators from "../actions/actions";
import {getemployeeSaga} from "./employeesSaga"

export function* watchAllemployees() {
  yield takeEvery(actionCreators.fetchemployees, getemployeeSaga);
}
