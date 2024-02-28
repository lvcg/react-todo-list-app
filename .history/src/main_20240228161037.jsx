import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM library

import App from './App.jsx'; // Importing the root component of the application

// Rendering the root component of the application into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the root component with React.StrictMode to detect potential issues
  <React.StrictMode>
    <App /> {/* Rendering the root component */}
  </React.StrictMode>,
);
