import React, { FC, useEffect } from 'react';
import styles from 'styles/AccountPage.module.scss';
import userIcon from 'assets/user_icon.svg';
import { FusionAuthLogoutButton, useFusionAuthContext, RequireAuth } from 'fusionauth-react-sdk';
import { useNavigate } from 'react-router-dom';

export const AccountPage: FC = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading } = useFusionAuthContext();

    useEffect(() => {
        // We are not logged in, redirect
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate])

    if (!isAuthenticated || isLoading) {
        return null;
    }

    return (
        <RequireAuth>

            {/* The out-of-the-box Logout button. You may customize how logout is performed by */}
            {/* utilizing the `logout` method supplied by the FusionAuthContext */}
            <FusionAuthLogoutButton className={styles.logout} />

            <div className={styles.container}>
                <div className={styles.blueContainer} />

                <div className={styles.ovalContainer}>
                    <div>
                        <img src={userIcon} alt="User icon" className={styles.userIcon} />
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

        </RequireAuth>
    );
};
