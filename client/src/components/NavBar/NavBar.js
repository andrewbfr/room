import React from "react";
import {Link} from "react-router-dom";


const NavBar = () => (
        <nav className="navbar navbar-expand-lg navbar-default bg-light">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/calendar">Calendar</Link>
                    </h4>
                </div>
                <div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/inventory">Inventory</Link>
                    </h4>
                </div>
                <div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/login">Login</Link>
                    </h4>
                </div>
                <div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/materialreq">MaterialReq</Link>
                    </h4>
                </div><div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/profile">Profile</Link>
                    </h4>
                </div><div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/qc">QC</Link>
                    </h4>
                </div><div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/report">Report</Link>
                    </h4>
                </div><div className="col-md-3 navbar-brand">
                    <h4>
                        <Link to="/ski-model">Ski</Link>
                    </h4>
                </div>
            </div>
        </nav>

)
  



export default NavBar;
