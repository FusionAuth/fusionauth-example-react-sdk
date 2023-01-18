import React, {FC, useEffect} from 'react';
import styles from 'styles/LoginPage.module.scss';
import {
    FusionAuthLoginButton,
    FusionAuthRegisterButton,
    useFusionAuth,
} from '@fusionauth/fusionauth-react-sdk';
import { useNavigate } from 'react-router-dom';

export const LoginPage: FC = () => {
    const navigate = useNavigate();

    // Pull loading/authentication state out of FusionAuth context
    const { isAuthenticated, isLoading } = useFusionAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/account');
        }
    }, [isAuthenticated, navigate])

    if (isAuthenticated || isLoading) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>
                Welcome
            </h1>

            {/* The out-of-the-box Login button. You may customize how logout is performed by */}
            {/* utilizing the `login` method supplied by the FusionAuthContext */}
            <FusionAuthLoginButton className={styles.button} />

            <span className={styles.or}>
                <div className={styles.line} />
                OR
                <div className={styles.line} />
            </span>

            {/* The out-of-the-box Register button. You may customize how logout is performed by */}
            {/* utilizing the `register` method supplied by the FusionAuthContext */}
            <FusionAuthRegisterButton className={styles.button} />
        </div>
    );
};
