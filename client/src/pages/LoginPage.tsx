import React, { FC, useEffect } from 'react';
import styles from '../styles/loginPage.module.scss';
import logo from '../logo.svg';
import logoGray from '../logoGray.svg';
import {FusionAuthLoginButton, FusionAuthRegisterButton, useFusionAuthContext} from 'fusionauth-react-sdk'
import {useNavigate} from 'react-router-dom';

export const LoginPage: FC = () => {
    const {user} = useFusionAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (Object.keys(user).length !== 0) { // we are logged in, redirect
                navigate('/account');
            }
        }
    }, [user, navigate])

    return (
        <>
            <img src={logo} alt="ChangeBank Logo" className={styles.image} />
            <div className={styles.container}>
                <h1 className={styles.welcome} >
                    Welcome
                </h1>

                <FusionAuthLoginButton className={styles.button} />
                <span className={styles.or}>
                    <div className={styles.line} />
                    OR
                    <div className={styles.line} />
                </span>
                <FusionAuthRegisterButton className={styles.button} />
            </div>
            <div className={styles.footerContainer}>
                <p className={styles.poweredBy} >Powered by</p>
                <img src={logoGray} alt="FusionAuth Logo" className={styles.fusionAuthLogo} />
            </div>
        </>
    );
};
