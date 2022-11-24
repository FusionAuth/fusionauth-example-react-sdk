import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import  {FusionAuthProvider} from 'fusionauth-react-sdk'
import { CONFIG } from './config'

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <FusionAuthProvider config={CONFIG}>
      <App />
    </FusionAuthProvider>
  </React.StrictMode>
);