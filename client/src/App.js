import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Report from './pages/Report';
import Ski from './pages/Ski';
import Inventory from './pages/Inventory';
import MaterialReq from './pages/MaterialReq';
import Profile from './pages/Profile';
import QC from './pages/QC';
import NoMatch from './pages/NoMatch';


const App = () => 
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route exact= {true} path="/" component={Login} />
                <Route exact= {true} path="/calendar" component={Calendar} />
                <Route exact= {true} path="/inventory" component={Inventory} />
                <Route exact= {true} path="/materialreq" component={MaterialReq} />
                <Route exact= {true} path="/profile" component={Profile} />
                <Route exact= {true} path="/qc" component={QC} />
                <Route exact= {true} path="/report" component={Report} />
                <Route exact= {true} path="/ski-model" component={Ski} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>

    

 

 
export default App;