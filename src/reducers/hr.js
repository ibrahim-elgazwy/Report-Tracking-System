import { 
    ADD_HR_REPORT, 
    DELETE_HR_REPORT, 
    DELIVER_HR_REPORTS, 
    EDIT_HR_REPORT
} from "../actions/hr";

import { getHrReports } from "../utils/seedsData";

const intialState = {
    hrReports: getHrReports(),
    report: null
}

const hr = (state = intialState, action) =>{
    switch(action.type){
        case DELIVER_HR_REPORTS:
            const deliveredReports = [...state.hrReports].map(r => (r.id === action.report.id) ? action.report : r);
            localStorage.setItem('hrReports', JSON.stringify(deliveredReports))
            return {
                ...state,
                hrReports: deliveredReports
            };

        case ADD_HR_REPORT:
            const reports = [...state.hrReports, action.report];
            localStorage.setItem('hrReports', JSON.stringify(reports))
            return {
                ...state,
                hrReports: reports
            };

        case DELETE_HR_REPORT:
            const filteredReports = [...state.hrReports].filter(r => r.id !== action.id);
            localStorage.setItem('hrReports', JSON.stringify(filteredReports))
            return {
                ...state,
                hrReports: filteredReports
            };

        case EDIT_HR_REPORT:
            const editedReports = [...state.hrReports].map(r => (r.id === action.report.id) ? action.report : r);
            localStorage.setItem('hrReports', JSON.stringify(editedReports))
            return {
                ...state,
                hrReports: editedReports
            };

        default:
            return state;
    }
}

export default hr;