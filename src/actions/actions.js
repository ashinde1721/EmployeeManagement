export const SEARCH_TEXT = "SEARCH_TEXT";
export const SAVE_EMPLOYEES = "SAVE_EMPLOYEES";
export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";

export const saveEmployees = (employees) => {
    return {
        type: SAVE_EMPLOYEES,
        payload: {
            employeeList: employees
        }
    };
};

export const fetchemployees = () => {
    return {
        type: FETCH_EMPLOYEES
    }
}
