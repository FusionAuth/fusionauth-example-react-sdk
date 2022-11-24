import React, { FC, useEffect } from 'react';
import styles from '../styles/accountPage.module.scss';
import logo from '../logo.svg';
import userLogo from '../userLogo.svg';
import logoGray from '../logoGray.svg';
import {FusionAuthLogoutButton, useFusionAuthContext, RequireAuth} from 'fusionauth-react-sdk'
import { useNavigate } from 'react-router-dom';

export const AccountPage: FC = () => {
    const navigate = useNavigate();
    const {user} = useFusionAuthContext();

    useEffect(() => {
        if (Object.keys(user).length === 0) { // we are not logged in, redirect
            navigate('/');
        }
    }, [user, navigate])

    return (
        <RequireAuth>
            <img src={logo} alt="ChangeBank Logo" className={styles.image} />
            <FusionAuthLogoutButton className={styles.logout} />

            <div className={styles.container}>
                <div className={styles.blueContainer} />

                <div className={styles.ovalContainer}>
                    <div>
                        <img src={userLogo} alt="user icon" className={styles.userIcon} />
                    </div>
                    
                </div>

                <div className={styles.textContainer}>
                    <p className={styles.name} >{user.given_name} {user.family_name}</p>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>{user.phone_number}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles.footerContainer}>
                <p className={styles.poweredBy} >Powered by</p>
                <img src={logoGray} alt="FusionAuth Logo" className={styles.fusionAuthLogo} />
            </div>
        </RequireAuth>
    );
};
