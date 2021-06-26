import React, { useState } from 'react';
import { searchReports } from '../utils/search';
import ShowReport from './dialog';

const DataGrid = (props) => {
    const {reports, showAction, onDelete, onEdit,
           onSend, showSuperVisorAction, action} = props;
    
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(true);

    const showDialog = (report) => {
        reports.map(r => {
            if(r.id === report.id) r.show = true;
            else r.show = false;
            return r;
        });

        setShow(!show);
    }

    const hideDialog = () => {
        reports.map(r => {
            r.show = false
            return r;
        });
        setShow(!show);
    }

    return ( 
        <div>
            <div className="form-group">
                {/* <label htmlFor="title" className="form-label">title</label> */}
                <input id="title" 
                       type="text" 
                       className="input--search mb-4" 
                       name="title" 
                       placeholder="Search by report title, description, status, .."
                       value={search} 
                       onChange={(e) => {setSearch(e.target.value)}}
                       autoComplete="off"/>
            </div>
            <table className="table table-light text-center">
                <thead className="table-success">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        {showAction && <th scope="col">Action</th>}
                        {showAction && <th scope="col">Delete</th>}
                        {showSuperVisorAction && <th scope="col">Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {searchReports(reports, search).map((report, index) => (<tr key={report.id.toString()}>
                        <th scope="row">{index + 1}</th>
                        <td>{report.title}</td>
                        <td>{report.createdAt}</td>
                        <td>{report.status}</td>
                        {showAction && <td>
                            <button onClick={() => onSend(report)} style={{marginRight: 15}} type="button" className="btn btn-sm btn-success">Send</button>
                            <button onClick={() => onEdit(report)} type="button" className="btn btn-sm btn-secondary">Edit</button>
                        </td>}
                        {showAction && <td>
                            <button onClick={() => onDelete(report.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                        </td>}
                        {(showSuperVisorAction) && <td className="text-center">
                            <button onClick={() => showDialog(report)} className="btn btn-secondary"> Show Report </button>
                            {report.show && <ShowReport hideDialog={hideDialog}  report={report} action={action}/>}
                        </td>}
                    </tr>))}
                </tbody>
            </table>
        </div>
     );
}
 
export default DataGrid;