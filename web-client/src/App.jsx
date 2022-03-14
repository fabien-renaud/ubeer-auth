import {LoginButton, LogoutButton} from './components';
import {useAuth0} from '@auth0/auth0-react';
import {useEffect, useState} from 'react';

function App() {
    const {getAccessTokenSilently, isAuthenticated, isLoading, user} = useAuth0();
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        isAuthenticated && getAccessTokenSilently().then((token) => setAccessToken(token));
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
                    <LogoutButton />
                </>
            ) : (
                <LoginButton />
            )}
        </div>
    );
}

export default App;
