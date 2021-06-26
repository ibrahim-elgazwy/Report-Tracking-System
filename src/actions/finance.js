export const ADD_FINANCE_REPORT = 'ADD_FINANCE_REPORT';
export const DELETE_FINANCE_REPORT = 'DELETE_FINANCE_REPORT';
export const EDIT_FINANCE_REPORT = 'EDIT_FINANCE_REPORT';
export const DELIVER_FINANCE_REPORTS = 'DELIVER_FINANCE_REPORTS';
export const DELIVER_FINANCE_REPORT = 'DELIVER_FINANCE_REPORTS';

export const addFinanceReport = (report) => dispatch => {
    dispatch({
        type: ADD_FINANCE_REPORT,
        report,
    });
}

export const deleteFinanceReport = (id) => dispatch => {
    dispatch({
        type: DELETE_FINANCE_REPORT,
        id
    });
}

export const editFinanceReport = (report) => dispatch => {
    dispatch({
        type: EDIT_FINANCE_REPORT,
        report
    });
}

export const deliverFinanceReports = (report) => dispatch => {
    dispatch({
        type: DELIVER_FINANCE_REPORTS,
        report
    });
}

