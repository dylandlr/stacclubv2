import React from 'react';
import ReactDOM from 'react-dom';

// import components
import App from './components/App';

// render the app in the index.html file
// this must be at the end of the file to render the app
// ReactDOM.render(<App />, document.getElementById('root'));
// export the component to be used in other files
// this must be at the end of the file after the ReactDOM.render? 
// yes, because the render function is what actually renders the component
// and if you export the component before it's rendered, it won't work
ReactDOM.render(<App />, document.getElementById('app'));