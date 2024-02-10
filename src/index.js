import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <div className='App'>
    <header className='App-header'>
    <div class='alert alert-primary' role='alert'>
    <p style={{ display: "none" }} className='d-block'>
    Bootstrap is now successfully installed 😃
    </p>
    <p className='d-none'>
    Bootstrap is not installed if you can see this 😢
    </p>
    </div>
    </header>
    </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
