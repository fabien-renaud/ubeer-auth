import {LoginButton, LogoutButton} from './components';
import {useAuth0} from '@auth0/auth0-react';
import {useEffect, useState} from 'react';

function App() {
    const {getAccessTokenSilently, getIdTokenClaims, isAuthenticated, isLoading, user} = useAuth0();
    const [accessToken, setAccessToken] = useState();
    const [idTokenClaims, setIdTokenClaims] = useState();

    useEffect(() => {
        isAuthenticated && getAccessTokenSilently().then((token) => setAccessToken(token));
        isAuthenticated && getIdTokenClaims().then((claims) => setIdTokenClaims(claims));
    }, [isAuthenticated]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="App">
            <h1>Ubeer</h1>
            {isAuthenticated ? (
                <>
                    <p>Bonjour {user.name}</p>
                    <p>Token : {accessToken}</p>
                    <p>Id : {idTokenClaims && JSON.stringify(idTokenClaims)}</p>
                    <LogoutButton />
                </>
            ) : (
                <LoginButton />
            )}
        </div>
    );
}

export default App;
