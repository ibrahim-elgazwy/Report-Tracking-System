import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DataGrid from '../../common/dataGrid';
import filterReports from '../../utils/filterReports';
import { reportStatus } from '../../enums/reportStatus';
import { addHrReport, deleteHrReport, deliverHrReports } from '../../actions/hr';

const HrEmployee = ({hrReports, deleteHrReport, deliverHrReports}) => {
    const history = useHistory();

    const handleDelete = id => {
        deleteHrReport(id);
    }

    const handleSend = report => {
        deliverHrReports({...report, status: reportStatus.DELIVERED});
    }

    const handleEdit = report => {
        history.push(`/edit-report/hr/${report.id}`, 'editHrReport')
    }

    return ( 
        <div className="hr-container">
            <div className="header d-flex justify-content-between">
                <h4>Hr Employee Reports</h4>
                <button type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => history.push("/add-report", 'addHrReport')}>
                            + Add New Report
                </button>
            </div>
            <DataGrid showAction={true} 
                      onDelete={handleDelete}
                      onSend={handleSend}
                      onEdit={handleEdit}
                      reports={filterReports(hrReports, [reportStatus.NEW, reportStatus.REJECTED])}/>

            <div className="delivered">
                <h4>Delivered Reports</h4>
                <DataGrid showAction={false} reports={filterReports(hrReports, [reportStatus.DELIVERED, reportStatus.ACCEPTED])}/>
            </div>
        </div>
     );
}

const mapStateToProps = state => ({
    hrReports: state.hr.hrReports
});

export default connect(mapStateToProps, {addHrReport, deleteHrReport, deliverHrReports})(HrEmployee);