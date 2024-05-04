// login button which calls on the handleAuthClick function
import React from 'react';
import { handleAuthClick } from '../js/signin'; //{} is only for named exports 

let tokenClient;
let gapiInited = false;
let gisInited = false;

class Login extends React.Component { 
  render() {
    document.getElementById('authorize_button').onclick = handleAuthClick;
    return (
      <div>
        <button id="authorize_button">Log In</button>
        {/* <button id="signout_button" style={{visibility: 'hidden'}}>Sign Out</button> */}
      </div>
    );
  }
}
// this is the login button which calls on the handleAuthClick function
// it should be placed in the render function of the Login component
// in the return statement with the button element inside a script tag
// the script tag should have the onclick attribute set to handleAuthClick
// which looks like this: <script>document.getElementById('authorize_button').onclick = handleAuthClick;</script>
// the button element should have an id of authorize_button and the text should be Log In
// needs to be in the render function but before the return statement so that it renders the button

export default Login;