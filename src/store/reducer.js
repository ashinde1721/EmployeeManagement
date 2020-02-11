import * as actions from '../actions/actions';

const initialState = {
    search: '',
    employeeList: []
};

const reducer = (state = initialState, action) => {
    const { type, payload = {} } = action;

    switch (type) {
        case actions.SEARCH_TEXT:
            return { ...state, search: payload.search };

        case actions.SAVE_EMPLOYEES:
            return {
                ...state,
                employeeList: payload.employeeList
            }
        default:
            return state;
    }
};

export default reducer;
