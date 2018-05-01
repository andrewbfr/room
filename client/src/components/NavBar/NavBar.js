import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css';


const NavBar = () => (
        <nav>
            <div className="nav-container">
                <div className="navBar">
                    <h4>
                        <Link to="/calendar">Calendar</Link>
                    </h4>
                </div>
                <div className="navBar">
                    <h4>
                        <Link to="/inventory">Inventory</Link>
                    </h4>
                </div>
                <div className="navBar">
                    <h4>
                        <Link to="/">Login</Link>
                    </h4>
                </div>
                <div className="navBar">
                    <h4>
                        <Link to="/materialreq">MaterialReq</Link>
                    </h4>
                </div>
                <div className="navBar">
                    <h4>
                        <Link to="/profile">Profile</Link>
                    </h4>
                </div>
                <div className="navBar">
                    <h4>
                        <Link to="/qc">QC</Link>
                    </h4>
                </div>
                <div className="navBar">
                    <h4>
                        <Link to="/report">Report</Link>
                    </h4>
                </div>
                <div className="navBar">
                    <h4>
                        <Link to="/ski-model">Ski</Link>
                    </h4>
                </div>
            </div>
        </nav>

)
  



export default NavBar;
