import React from 'react';
import styles from 'styles/Footer.module.scss';
import fusionAuthLogo from 'assets/fusion_auth_logo.svg';

export const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.poweredBy} >Powered by</p>
            <img src={fusionAuthLogo} alt="FusionAuth Logo" className={styles.fusionAuthLogo} />
        </div>
    );
}
