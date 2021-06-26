import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DataGrid from '../../common/dataGrid';
import filterReports from '../../utils/filterReports';
import { reportStatus } from '../../enums/reportStatus';
import {   
    addFinanceReport, 
    deleteFinanceReport, 
    deliverFinanceReports } from '../../actions/finance';

const FinanceEmployee = ({financeReports, deleteFinanceReport, deliverFinanceReports}) => {
    const history = useHistory();

    const handleDelete = id => {
        deleteFinanceReport(id);
    }

    const handleSend = report => {
        deliverFinanceReports({...report, status: reportStatus.DELIVERED});
    }

    const handleEdit = report => {
        history.push(`/edit-report/finance/${report.id}`, 'editFinanceReport')
    }

    return ( 
        <div className="hr-container">
            <div className="header d-flex justify-content-between">
                <h4>Finance Employee Reports</h4>
                <button type="button" 
                        className="btn btn-primary btn-sm" 
                        onClick={() => history.push("/add-report", 'addFinanceReport')}>
                            + Add New Report
                </button>
            </div>
            <DataGrid showAction={true} 
                      onDelete={handleDelete}
                      onSend={handleSend}
                      onEdit={handleEdit}
                      reports={filterReports(financeReports, [reportStatus.NEW, reportStatus.REJECTED])}/>

            <div className="delivered">
                <h4>Delivered Reports</h4>
                <DataGrid showAction={false} reports={filterReports(financeReports, [reportStatus.DELIVERED, reportStatus.ACCEPTED])}/>
            </div>
        </div>
     );
}

const mapStateToProps = state => ({
    financeReports: state.finance.financeReports
});

const actions = {
    addFinanceReport, 
    deleteFinanceReport, 
    deliverFinanceReports
}

export default connect(mapStateToProps, actions)(FinanceEmployee);