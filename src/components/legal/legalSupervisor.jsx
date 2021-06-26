import React from 'react';
import { connect } from 'react-redux';
import DataGrid from '../../common/dataGrid';
import { reportStatus } from '../../enums/reportStatus';
import filterReports from '../../utils/filterReports';

const LegalSupervisor = ({legalReports}) => {
    return ( 
        <div className="delivered">
                <h4>Delivered Reports</h4>
                <DataGrid showSuperVisorAction={true} 
                          action="editLegalReport"
                          reports={filterReports(legalReports, [reportStatus.DELIVERED, reportStatus.ACCEPTED])}/>
        </div>
     );
}
 
const mapStateToProps = state => ({
    legalReports: state.legal.legalReports
});

export default connect(mapStateToProps, {})(LegalSupervisor);