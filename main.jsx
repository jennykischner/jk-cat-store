import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './src/components/index.css';
import ItemList from './src/components/ItemList.jsx';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCglQRe7HQbtINWpP_aLloIrRfVOTqCrHk",
  authDomain: "jkcat-store.firebaseapp.com",
  projectId: "jkcat-store",
  storageBucket: "jkcat-store.appspot.com",
  messagingSenderId: "913690763940",
  appId: "1:913690763940:web:7e12faf18b23c0496f7c31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <ItemList />

  </div>
);