import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../containers/Home";
import Detail from "../components/Detail";

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
        </Router>
    );
};

export default AppRoutes;
