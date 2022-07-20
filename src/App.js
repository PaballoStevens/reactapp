import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Comments from './Comments';

import Home from './Components/home';
import login from './Components/auth/login';
import Register from './Components/auth/Register';
import PieChart from './Components/Piechart';
import Chat from './Components/chat';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/login" component={login}></Route>
              <Route path="/Register" component={Register}></Route>
              <Route path="/PieChart" component={PieChart}></Route>
              <Route path="/Chat" component={Chat}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
