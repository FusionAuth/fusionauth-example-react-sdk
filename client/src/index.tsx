import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import  {FusionAuthProvider} from 'fusionauth-react-sdk'
import { config } from './config'

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <FusionAuthProvider config={config}>
      <App />
    </FusionAuthProvider>
  </React.StrictMode>
);
