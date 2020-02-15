import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import Firebase, {FirebaseContext } from './firebase'

const container = document.getElementById("root");

ReactDOM.render(
<FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
   container);
   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
