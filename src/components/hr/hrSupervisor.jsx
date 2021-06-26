import React from 'react';
import { connect } from 'react-redux';
import DataGrid from '../../common/dataGrid';
import { reportStatus } from '../../enums/reportStatus';
import filterReports from '../../utils/filterReports';

const HrSupervisor = ({hrReports}) => {
    return ( 
        <div className="delivered">
                <h4>Delivered Reports</h4>
                <DataGrid showSuperVisorAction={true} 
                          action="editHrReport"
                          reports={filterReports(hrReports, [reportStatus.DELIVERED, reportStatus.ACCEPTED])}/>
        </div>
     );
}
 
const mapStateToProps = state => ({
    hrReports: state.hr.hrReports
});

export default connect(mapStateToProps, {})(HrSupervisor);