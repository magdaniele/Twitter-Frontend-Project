import React from 'react';
import ReactDOM from 'react-dom';
import firebaseApp from './services/firebase'
import { getAnalytics } from "firebase/analytics";
import './index.scss';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

ReactDOM.render(
  <React.StrictMode>
    <ReactNotification />
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
getAnalytics(firebaseApp);