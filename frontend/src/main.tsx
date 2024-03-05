import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReduxProvider from './redux/ReduxProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
