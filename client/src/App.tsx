import React from 'react';
import { LoginPage } from './pages/LoginPage';
import { AccountPage } from './pages/AccountPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

    const RoutePath = {
        LOGIN : '/',
        ACCOUNT : '/account'
    };

    return (
        <Router>
            <Routes>
                <Route path={RoutePath.LOGIN} element={<LoginPage />} />
                <Route path={RoutePath.ACCOUNT} element={<AccountPage />} />
            </Routes>
        </Router>
    );
}

export default App;