import React, { FC, useState } from 'react';
import styles from '../styles/accountPage.module.scss';
import logo from '../logo.svg';
import {FusionAuthLogoutButton, useFusionAuthContext, RequireAuth} from 'fusionauth-react-sdk'

export const AccountPage: FC = () => {

    const [user, setUser] = useState(useFusionAuthContext().user);

    return (
        <RequireAuth>
            <img src={logo} alt="ChangeBank Logo" className={styles.image} />
            <FusionAuthLogoutButton />

            <div className={styles.container}>
                <div className={styles.blueContainer} />

                <div className={styles.ovalContainer}>
                    <img src={user.icon} alt="user icon" />
                </div>

                <span className={styles.name} >{user.name}</span>

                <div>
                    <span className={styles.text} >Email</span>
                    <span className={styles.text} >{user.email}</span>
                </div>

                <div>
                    <span className={styles.text} >Phone Number</span>
                    <span className={styles.text} >{user.phone}</span>
                </div>
            </div>
        </RequireAuth>
    );
};
