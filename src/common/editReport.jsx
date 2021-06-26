import React, { useState } from 'react';
import { validateAddReport } from '../utils/validateAddReport';
import { connect } from 'react-redux';
import { editHrReport } from '../actions/hr'
import { editFinanceReport } from '../actions/finance'
import { editLegalReport } from '../actions/legal'
import { reportStatus } from '../enums/reportStatus';

const EditReport = (props) => {
    const id = props.match.params.id;
    const reportType = props.match.params.reportType;
    let editedReport = ([...props[reportType]].filter(r => r.id === +id))[0];
    const [report, setReport] = useState({...editedReport});
    const [error, setError] = useState({path: '', errMsg: ''});
    
    const editReport = e => {
        e.preventDefault();
        const {title, description} = report;
        const err = validateAddReport({title, description});
        if(error && error.path) return setError(err);
        else {
            const key = props.location.state;
            props[key](report);
            props.history.push('/');
        }
    }

    return ( 
        <div className="col-md-8 col-xs-12 form-container">
            <form onSubmit={editReport}>
                <h4 className="text-center">Edit Report {report.id}</h4>        
                <div className="form-group">
                    <label htmlFor="title" className="form-label">title</label>
                    <input id="title" 
                        type="text" 
                        className="form-input" 
                        name="title" 
                        value={report.title} 
                        onChange={(e) => {setReport({...report, title: e.target.value})}}
                        autoComplete="off"/>
                </div>
                {(error && error.path === 'title') && <div className="error m-2">{error.errMsg}</div>}
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="description" 
                        id="description"  
                        className="form-input" 
                        name="description" 
                        value={report.description} 
                        onChange={(e) => {setReport({...report, description: e.target.value})}}
                        autoComplete="off" />
                </div>
                {(error && error.path === 'description') && <div className="error m-2">{error.errMsg}</div>}

                <div>
                    <p className="mt-4">Report Status</p>
                    <div className="alert alert-primary"> {report.status}</div>
                </div>
                {report.status === reportStatus.REJECTED && <div>
                    <p className="mt-4">Rejected Reason</p>
                    <div className="alert alert-danger"> {report.rejectedReason}</div>
                </div>}
                <div className="d-flex  justify-content-center mt-4">
                    <button onClick={() => props.history.push('/')} 
                            className="btn btn-primary" 
                            type="button">Return To Home</button>
                    <button disabled={!report.title || !report.description} 
                            className="btn btn-secondary" type="submit" 
                            style={{marginLeft: 40}}>Edit Report</button>
                </div>
            </form>  
        </div>
     );
}

const mapStateToProps = state => ({
    hr: state.hr.hrReports,
    finance: state.finance.financeReports,
    legal: state.legal.legalReports,
});

const editReports = {
    editHrReport,
    editFinanceReport,
    editLegalReport
}
export default connect(mapStateToProps, editReports)(EditReport);