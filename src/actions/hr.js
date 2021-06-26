export const ADD_HR_REPORT = 'ADD_HR_REPORT';
export const DELETE_HR_REPORT = 'DELETE_HR_REPORT';
export const EDIT_HR_REPORT = 'EDIT_HR_REPORT';
export const DELIVER_HR_REPORTS = 'DELIVER_HR_REPORTS';
export const DELIVER_HR_REPORT = 'DELIVER_HR_REPORTS';

export const addHrReport = (report) => dispatch => {
    dispatch({
        type: ADD_HR_REPORT,
        report,
    });
}

export const deleteHrReport = (id) => dispatch => {
    dispatch({
        type: DELETE_HR_REPORT,
        id
    });
}

export const editHrReport = (report) => dispatch => {
    dispatch({
        type: EDIT_HR_REPORT,
        report
    });
}

export const deliverHrReports = (report) => dispatch => {
    dispatch({
        type: DELIVER_HR_REPORTS,
        report
    });
}

