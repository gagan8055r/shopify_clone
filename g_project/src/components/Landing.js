

import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";
export function Landing()
{
    const { loginWithRedirect ,isAuthenticated,user} = useAuth0();
    const {logout} = useAuth0();

    const handleCreateStoreClick = () => {
        if (!isAuthenticated) {
            alert("Please log in first.");
        }
    };
    return (
        <div>
            <p>hello from landing page</p>
            {
                isAuthenticated && <p>{user.name}</p>
            }
            {
                isAuthenticated ? <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>
                    Log Out
                </button> : <button onClick={() => loginWithRedirect()}>Log In</button>
            }
            <Link to={isAuthenticated ? "/store" : "/"}>
                <button onClick={handleCreateStoreClick}>Create your store</button>
            </Link>
        </div>
    )
}