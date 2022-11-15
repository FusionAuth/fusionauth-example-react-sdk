import React, { FC } from 'react';
import styles from '../styles/loginPage.module.scss';
import logo from '../logo.svg';
import {FusionAuthLoginButton} from 'fusionauth-react-sdk'
import {FusionAuthRegisterButton} from 'fusionauth-react-sdk/src/components/FusionAuthRegisterButton'

export const LoginPage: FC = () => {

    return (
        <div>
            <img src={logo} alt="ChangeBank Logo" className={styles.image} />
            <div className={styles.container}>
                <h1 className={styles.welcome} >
                    Welcome
                </h1>

                <FusionAuthLoginButton />
                <button className={styles.button}>Login</button>
                <span className={styles.or}>
                    <div className={styles.line} />
                    OR
                    <div className={styles.line} />
                </span>
                <button className={styles.button}>Register Now</button>
            </div>
        </div>
    );
};
