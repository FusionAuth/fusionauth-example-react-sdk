import React from 'react';
import { LoginPage } from 'pages/LoginPage';
import { AccountPage } from 'pages/AccountPage';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from 'layouts/AppLayout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/account" element={<AccountPage />} />
            </Route>
        </Routes>
    );
}

export default App;
