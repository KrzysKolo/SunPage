import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SmallMenuProvider from './context/menuContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SmallMenuProvider>
      <App />
    </SmallMenuProvider>
  </React.StrictMode>
);

