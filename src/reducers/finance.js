import { 
    ADD_FINANCE_REPORT,
    DELETE_FINANCE_REPORT,
    EDIT_FINANCE_REPORT,
    DELIVER_FINANCE_REPORTS
} from "../actions/finance";
import { getFinanceReports } from "../utils/seedsData";

const intialState = {
    financeReports: getFinanceReports()
}

const finance = (state = intialState, action) =>{
    switch(action.type){
        case DELIVER_FINANCE_REPORTS:
        debugger
            const deliveredReports = [...state.financeReports].map(r => (r.id === action.report.id) ? action.report : r);
            localStorage.setItem('financeReports', JSON.stringify(deliveredReports))
            return {
                ...state,
                financeReports: deliveredReports
            };

        case ADD_FINANCE_REPORT:
            const reports = [...state.financeReports, action.report];
            localStorage.setItem('financeReports', JSON.stringify(reports))
            return {
                ...state,
                financeReports: reports
            };

        case DELETE_FINANCE_REPORT:
            const filteredReports = [...state.financeReports].filter(r => r.id !== action.id);
            localStorage.setItem('financeReports', JSON.stringify(filteredReports))
            return {
                ...state,
                financeReports: filteredReports
            };

        case EDIT_FINANCE_REPORT:
            const editedReports = [...state.financeReports].map(r => (r.id === action.report.id) ? action.report : r);
            localStorage.setItem('financeReports', JSON.stringify(editedReports))
            return {
                ...state,
                financeReports: editedReports
            };

        default:
            return state;
    }
}

export default finance;