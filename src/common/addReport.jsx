import React, { useState } from 'react';
import { validateAddReport } from '../utils/validateAddReport';
import { connect } from 'react-redux';
import { addHrReport } from '../actions/hr'
import { addFinanceReport } from '../actions/finance'
import { addLegalReport } from '../actions/legal'
import { reportStatus } from '../enums/reportStatus';

const AddReport = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState({path: '', errMsg: ''});
    
    const addReport = async e => {
        e.preventDefault();
        const err = validateAddReport({title, description});
        if(error && error.path) return setError(err);
        else {
            const key = props.location.state;
            props[key]({
                title, 
                description,
                id: Math.floor(Math.random() * 10000),
                status: reportStatus.NEW,
                createdAt: "24-6-2021"
            });
            props.history.push('/');
        }
    }

    return ( 
        <div className="col-md-8 col-xs-12 form-container">
        <form onSubmit={addReport}>
            <h4 className="text-center">Add New Report</h4>        
            <div className="form-group">
                <label htmlFor="title" className="form-label">title</label>
                <input id="title" 
                       type="text" 
                       className="form-input" 
                       name="title" 
                       value={title} 
                       onChange={(e) => {setTitle(e.target.value)}}
                       autoComplete="off"/>
            </div>
            {(error && error.path === 'title') && <div className="error m-2">{error.errMsg}</div>}
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="description" 
                       id="description"  
                       className="form-input" 
                       name="description" 
                       value={description} 
                       onChange={(e) => {setDescription(e.target.value)}}
                       autoComplete="off" />
            </div>
            {(error && error.path === 'description') && <div className="error m-2">{error.errMsg}</div>}
            <div className="d-flex  justify-content-center mt-4">
                <button onClick={() => props.history.push('/')} className="btn btn-primary" type="button">Return To Home</button>
                <button disabled={!title || !description} className="btn btn-secondary" type="submit" style={{marginLeft: 40}}>Add Report</button>
            </div>
        </form>  
    </div>
     );
}

const addReport = {
    addHrReport,
    addFinanceReport,
    addLegalReport
}
export default connect(null, addReport)(AddReport);