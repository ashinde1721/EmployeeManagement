import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';

import {getemployeeSaga} from  '../sagas/employeesSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getemployeeSaga);

export default store;