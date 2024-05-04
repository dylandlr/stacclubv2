import React from 'react';
import { handleSignoutClick } from '../js/signout';
import { gapi } from 'gapi-script';

class Logout extends React.Component {
    componentDidMount() {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: process.env.REACT_APP_API_KEY,
                clientId: process.env.REACT_APP_CLIENT_ID,
                discoveryDocs: process.env.REACT_APP_DISCOVERY_DOCS,
                scope: process.env.REACT_APP_SCOPES
            }).then(() => {
                gapi.auth2.getAuthInstance().isSignedIn.listen(() => {
                    document.getElementById('signout_button').style.visibility = 'visible';
                });
            });
        }
        );
    }
    render() {
        document.getElementById('signout_button').onclick = handleSignoutClick;
        return (
        <div>
            <button id="signout_button" style={{visibility: 'hidden'}}>Sign Out</button>
        </div>
        );
    }
    }
    // this is the signout button which calls on the handleSignoutClick function
// export the component to be used in other files
export default Logout;

