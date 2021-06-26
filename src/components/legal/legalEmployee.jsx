import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DataGrid from '../../common/dataGrid';
import filterReports from '../../utils/filterReports';
import { reportStatus } from '../../enums/reportStatus';
import { deleteLegalReport, deliverLegalReports } from '../../actions/legal';

const LegalEmployee = ({legalReports, deleteLegalReport, deliverLegalReports}) => {
    const history = useHistory();

    const handleDelete = id => {
        deleteLegalReport(id);
    }

    const handleSend = report => {
        deliverLegalReports({...report, status: reportStatus.DELIVERED});
    }

    const handleEdit = report => {
        history.push(`/edit-report/legal/${report.id}`, 'editLegalReport')
    }

    return ( 
        <div className="hr-container">
            <div className="header d-flex justify-content-between">
                <h4>Legal Employee Reports</h4>
                <button type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => history.push("/add-report", 'addLegalReport')}>
                            + Add New Report
                </button>
            </div>
            <DataGrid showAction={true} 
                      onDelete={handleDelete}
                      onSend={handleSend}
                      onEdit={handleEdit}
                      reports={filterReports(legalReports, [reportStatus.NEW, reportStatus.REJECTED])}/>

            <div className="delivered">
                <h4>Delivered Reports</h4>
                <DataGrid showAction={false} reports={filterReports(legalReports, [reportStatus.DELIVERED, reportStatus.ACCEPTED])}/>
            </div>
        </div>
     );
}

const mapStateToProps = state => ({
    legalReports: state.legal.legalReports
});

export default connect(mapStateToProps, {deleteLegalReport, deliverLegalReports})(LegalEmployee);