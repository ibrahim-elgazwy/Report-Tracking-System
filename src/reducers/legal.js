import { 
    ADD_LEGAL_REPORT, 
    DELETE_LEGAL_REPORT, 
    DELIVER_LEGAL_REPORTS, 
    EDIT_LEGAL_REPORT
} from "../actions/legal";

import { getLegalReports } from "../utils/seedsData";

const intialState = {
    legalReports: getLegalReports()
}

const legal = (state = intialState, action) =>{
    switch(action.type){
        case DELIVER_LEGAL_REPORTS:
            const deliveredReports = [...state.legalReports].map(r => (r.id === action.report.id) ? action.report : r);
            localStorage.setItem('legalReports', JSON.stringify(deliveredReports))
            return {
                ...state,
                legalReports: deliveredReports
            };

        case ADD_LEGAL_REPORT:
            const reports = [...state.legalReports, action.report];
            localStorage.setItem('legalReports', JSON.stringify(reports))
            return {
                ...state,
                legalReports: reports
            };

        case DELETE_LEGAL_REPORT:
            const filteredReports = [...state.legalReports].filter(r => r.id !== action.id);
            localStorage.setItem('legalReports', JSON.stringify(filteredReports))
            return {
                ...state,
                legalReports: filteredReports
            };

        case EDIT_LEGAL_REPORT:
            const editedReports = [...state.legalReports].map(r => (r.id === action.report.id) ? action.report : r);
            localStorage.setItem('legalReports', JSON.stringify(editedReports))
            return {
                ...state,
                legalReports: editedReports
            };

        default:
            return state;
    }
}

export default legal;