import React from 'react';
import { Outlet } from 'react-router-dom';
import {Footer} from 'components/Footer';
import logo from 'assets/example_bank_logo.svg';
import styles from 'styles/AppLayout.module.scss';

export const AppLayout: React.FC = () => {
    return (
        <>
            <img src={logo} alt="ChangeBank Logo" className={styles.headerImage} />

            <Outlet/>

            <Footer />
        </>


    )
};
