import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH_DOMAIN ?? ''}
            clientId={import.meta.env.VITE_AUTH_CLIENT_ID ?? ''}
            redirectUri={window.location.origin}
            audience={import.meta.env.VITE_AUTH_AUDIENCE ?? ''}>
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
