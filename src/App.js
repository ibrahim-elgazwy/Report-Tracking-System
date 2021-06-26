import React, {useEffect} from 'react';
import {Switch, Route, useHistory} from "react-router-dom"
import './App.css';
import AddReport from './common/addReport';
import editReport from './common/editReport';
import Home from "./components/home/home";
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';

function App() {
  let history = useHistory();
  useEffect(() => {
    if(!localStorage.getItem('user')) history.push('/login');
  }, [])
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/add-report" component={AddReport} />
              <Route path="/edit-report/:reportType/:id" component={editReport} />
              <Route path="/" component={Home} />
          </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
