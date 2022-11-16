import  {FusionAuthProvider} from 'fusionauth-react-sdk'
import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { CONFIG } from './config'
import { AccountPage } from './pages/AccountPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

    const RoutePath = {
        LOGIN : '/',
        ACCOUNT : '/account'
    };

    return (
        <FusionAuthProvider config={CONFIG}>
            <Router>
                <Routes>
                    <Route path={RoutePath.LOGIN} element={<LoginPage />} />
                    <Route path={RoutePath.ACCOUNT} element={<AccountPage />} />
                </Routes>
            </Router>
        </FusionAuthProvider>
    );
}

export default App;