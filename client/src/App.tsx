import  {FusionAuthProvider} from 'fusionauth-react-sdk/src/providers/FusionAuthProvider'
import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { CONFIG } from './config'
import { AccountPage } from './pages/AccountPage';
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {

    const RoutePath = {
        LOGIN : '/',
        ACCOUNT : '/account'
    };

    return (
        <FusionAuthProvider config={CONFIG}>
            <Router>
                <Route path={RoutePath.LOGIN}>
                    <LoginPage/>
                </Route>
                <Route path={RoutePath.ACCOUNT}>
                    <AccountPage />
                </Route>
            </Router>
        </FusionAuthProvider>
    );
}

export default App;