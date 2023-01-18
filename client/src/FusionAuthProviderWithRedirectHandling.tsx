import React, { PropsWithChildren } from 'react';
import {FusionAuthProvider, RedirectFail, RedirectSuccess} from '@fusionauth/fusionauth-react-sdk';
import { useNavigate } from 'react-router-dom';
import { config } from 'config';

export const FusionAuthProviderWithRedirectHandling: React.FC<PropsWithChildren> = ({children}) => {
    const navigate = useNavigate();

    // Custom handling of success to navigate to the appropriate location via React Router
    const handleRedirectSuccess: RedirectSuccess = () => {
        navigate('/account');
    };

    // Custom handle failure
    const handleRedirectFail: RedirectFail = error => {
        console.error(error);
        window.alert('Something went wrong');
    };

    return (
        <FusionAuthProvider
            {...config}
            onRedirectSuccess={handleRedirectSuccess}
            onRedirectFail={handleRedirectFail}
        >
            {children}
        </FusionAuthProvider>
    );
}
