
// our root component, the app which will render the login/signout buttons
import React from 'react'; // import react module 
import Login from './Login'; // import the Login component
import Signout from './Signout'; // import the Signout component

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <Signout />
      </div>
    );
  }
}

// render the app
export default App;