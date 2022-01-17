import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';
//snippets: imr, slr
const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/RecoveryPassword" component={RecoveryPassword}/>
                <Route component={NotFound}/>
            </Layout>
        </Switch>
        </BrowserRouter>

    );
}

export default App;
