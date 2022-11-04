import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export class NavBar extends Component {
  static propTypes = {};

  render() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/NewsHorse">NewsHorse</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to="/NewsHorse">Home</Link>
                    </li>
                    {/* 
                    <Route path="/business"><News pageSize={5} country="in" category="business"/></Route>
                    <Route path="/entertainment"><News pageSize={5} country="in" category="entertainment"/></Route>
                    <Route path="/general"><News pageSize={5} country="in" category="general"/></Route>
                    <Route path="/health"><News pageSize={5} country="in" category="health"/></Route>
                    <Route path="/science"><News pageSize={5} country="in" category="science"/></Route>
                    <Route path="/sports"><News pageSize={5} country="in" category="sports"/></Route>
                    <Route path="/technology "><News pageSize={5} country="in" category="technology"/></Route>
                    */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                    

                </ul>
                <div  className="d-flex" >
                <Button variant="contained" onClick={()=>{ window.location.replace('https://reg-login-using-nodejs-mongodb.herokuapp.com/');}}>
                  <Link to="" style={{color:"white", textDecoration:"none"}}>LOGIN / SIGNUP</Link> 
                </Button>
                </div>
                </div>
            </div>
            </nav>
        </div>
    );
  }
}

export default NavBar;
