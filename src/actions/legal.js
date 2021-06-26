export const ADD_LEGAL_REPORT = 'ADD_LEGAL_REPORT';
export const DELETE_LEGAL_REPORT = 'DELETE_LEGAL_REPORT';
export const EDIT_LEGAL_REPORT = 'EDIT_LEGAL_REPORT';
export const DELIVER_LEGAL_REPORTS = 'DELIVER_LEGAL_REPORTS';
export const DELIVER_LEGAL_REPORT = 'DELIVER_LEGAL_REPORTS';

export const addLegalReport = (report) => dispatch => {
    dispatch({
        type: ADD_LEGAL_REPORT,
        report,
    });
}

export const deleteLegalReport = (id) => dispatch => {
    dispatch({
        type: DELETE_LEGAL_REPORT,
        id
    });
}

export const editLegalReport = (report) => dispatch => {
    dispatch({
        type: EDIT_LEGAL_REPORT,
        report
    });
}

export const deliverLegalReports = (report) => dispatch => {
    dispatch({
        type: DELIVER_LEGAL_REPORTS,
        report
    });
}

