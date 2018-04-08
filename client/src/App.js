import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clock from './components/Clock';
import Hello from './components/Hello';
import User from './components/User';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Aside from './components/Aside';
import ErrorMsg  from './components/Error';
import Table from './components/Table';
import Toast from './components/Toast';
import Submit from './components/Submit';

class App extends Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <Aside />
                <ErrorMsg />
                <Toast />
                <Table />
                <Footer />
            </div>
        )
    }
}
    

 

 
export default App;