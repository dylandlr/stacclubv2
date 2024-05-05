// our root component, the app which will render the login/signout buttons
import React from "react"; // import react module
import Login from "./Login"; // import the Login component
import Signout from "./Logout"; // import the Signout component
import DarkModeButton from "../Dark";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Signout />
        <DarkModeButton />
      </div>
    );
  }
}

// render the app
export default App;
