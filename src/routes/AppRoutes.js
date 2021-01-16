import React from 'react';
import {HashRouter  as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "../containers/Home";
import Detail from "../components/Detail";

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/detail/:id" component={Detail}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default AppRoutes;
