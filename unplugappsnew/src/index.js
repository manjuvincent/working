import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Innovation.js';
// import App from './components/InnovationShort.js'

// import App from './pages/AccurateHome'
// import App from './pages/InnovPage'

import Navigation from './Navigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navigation/>
  </React.StrictMode>
);

