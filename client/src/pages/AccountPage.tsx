import React, { FC, useState } from 'react';
import styles from '../styles/accountPage.module.scss';
import logo from '../logo.svg';
import user from '../user.svg';
import {FusionAuthLogoutButton, useFusionAuthContext, RequireAuth} from 'fusionauth-react-sdk'

export const AccountPage: FC = () => {

    //const [userData, setUserData] = useState(useFusionAuthContext().user);
    const userData = {icon: "", name: "Jim DeBlock", email: "user@gmail.com", phone: "2032311707"}

    return (
        <div>
            <img src={logo} alt="ChangeBank Logo" className={styles.image} />
            <button className={styles.logout} >Logout</button>

            <div className={styles.container}>
                <div className={styles.blueContainer} />

                <div className={styles.ovalContainer}>
                    <div>
                        <img src={user} alt="user icon" className={styles.userIcon} />
                    </div>
                    
                </div>

                <div className={styles.textContainer}>
                    <p className={styles.name} >{userData.name}</p>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>{userData.email}</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>{userData.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
