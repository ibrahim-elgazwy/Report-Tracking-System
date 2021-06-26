import React from 'react';
import { connect } from 'react-redux';
import DataGrid from '../../common/dataGrid';
import { reportStatus } from '../../enums/reportStatus';
import filterReports from '../../utils/filterReports';

const FinanceSupervisor = ({financeReports}) => {
    return ( 
        <div className="delivered">
                <h4>Delivered Reports</h4>
                <DataGrid showSuperVisorAction={true} 
                          action="editFinanceReport"
                          reports={filterReports(financeReports, [reportStatus.DELIVERED, reportStatus.ACCEPTED])}/>
        </div>
     );
}
 
const mapStateToProps = state => ({
    financeReports: state.finance.financeReports
});

export default connect(mapStateToProps, {})(FinanceSupervisor);