import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editHrReport } from '../actions/hr'
import { editFinanceReport } from '../actions/finance'
import { editLegalReport } from '../actions/legal'
import { reportStatus } from '../enums/reportStatus';
import './common.css';

const ShowReport = (props) => {
    const [report, setReport] = useState(props.report);
    const [error, setError] = useState("");
    const accept = report.status === reportStatus.ACCEPTED;
    const reject = report.status === reportStatus.REJECTED;

    const saveAction = () => {
        if(reject && !report.rejectedReason) return setError("Please enter rejection reason!");
        if(accept || reject) {
            const {action} = props;
            delete report.show;
            props[action](report);
            props.hideDialog();
        } else {
            return setError("Please select action");
        }
    }

    const close = () => {
        document.getElementById("dialog__modal").style.display = "none";
        props.hideDialog();
    };

    return ( 
        <div className="dialog">
            <input type="checkbox" id="input" />
            <div className="dialog__modal" id="dialog__modal" style={{display: 'block'}}>
                <label onClick={close} htmlFor="input" className="close"> x </label>
                <h3>{report.title}</h3>
                <p>
                    {report.description}
                </p>
                <div className="action">
                    <span>Select Report Action</span>
                    <div className="form-check">
                        <input onChange={() => {setReport({...report, status: reportStatus.ACCEPTED}); setError('')}} 
                               className="form-check-input" 
                               checked={accept}
                               type="radio" 
                               value="accept"
                               id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Accept
                        </label>
                    </div>
                    <div className="form-check">
                    <input onChange={() => {setReport({...report, status: reportStatus.REJECTED}); setError('')}} 
                           className="form-check-input" 
                           type="radio" 
                           checked={reject}
                           value="reject"
                           id="flexRadioDefault2" />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Reject
                    </label>
                    </div>
                    {report.status === reportStatus.REJECTED && <div className="mt-2">
                        <div className="form-group">
                        {/* <label htmlFor="title" className="form-label">title</label> */}
                        <input id="title" 
                            type="text" 
                            className="form-input" 
                            name="title" 
                            placeholder="Please enter rejection reason"
                            value={report.rejectedReason} 
                            onChange={(e) => {setReport({...report, rejectedReason: e.target.value}); setError('')}}
                            autoComplete="off"/>
                    </div>
                    </div>}
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                </div>
                {/* <label htmlFor="input" className="modal--btn modal-btn"> Close </label> */}
                <div className="d-flex justify-content-center mb-4">
                    <button onClick={close} className="btn btn-secondary" style={{marginRight: 30}}>Close</button>
                    <button onClick={saveAction} className="btn btn-success">Save</button>
                </div>
            </div>
        </div>
     );
}
 
const changeStatus = {
    editHrReport,
    editFinanceReport,
    editLegalReport
}

export default connect(null, changeStatus)(ShowReport);