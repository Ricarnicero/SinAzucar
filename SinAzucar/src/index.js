import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdzPSaOANFKK-qT66cTBw0wv8A3N-QNms",
    authDomain: "sin-azucar.firebaseapp.com",
    databaseURL: "https://sin-azucar.firebaseio.com",
    projectId: "sin-azucar",
    storageBucket: "sin-azucar.appspot.com",
    messagingSenderId: "542047715275",
    appId: "1:542047715275:web:ccb91ad3e16a22765e004e"
  };
  
const container = document.getElementById("root");
ReactDOM.render(<App />, container);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
