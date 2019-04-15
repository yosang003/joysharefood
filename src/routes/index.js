import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Record from '../pages/record';
import List from '../pages/list';
import Detail from '../pages/detail';


const routes = (
    <Router>
        <Route exact path='/' component={Home}></Route>
        <Route path='/record' component={Record}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/detail' component={Detail}></Route>
    </Router>
)

export default routes;