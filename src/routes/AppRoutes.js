import React, {Suspense} from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Loader from "../components/Loader";
import {LOADING_COMPONENT} from "../constants/MessageConstant";

const Home = React.lazy(() => import('../containers/Home'));
const Detail = React.lazy(() => import('../components/Detail'));


const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader message={LOADING_COMPONENT}/>}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/detail/:id" component={Detail}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </Suspense>
    );
};

export default AppRoutes;
