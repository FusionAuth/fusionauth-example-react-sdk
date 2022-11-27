import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FusionAuthProviderWithRedirectHandling } from './FusionAuthProviderWithRedirectHandling';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FusionAuthProviderWithRedirectHandling>
                <App />
            </FusionAuthProviderWithRedirectHandling>
      </BrowserRouter>
  </React.StrictMode>
);
