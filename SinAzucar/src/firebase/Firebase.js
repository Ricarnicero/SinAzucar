import app from 'firebase/app';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyCdzPSaOANFKK-qT66cTBw0wv8A3N-QNms",
  authDomain: "sin-azucar.firebaseapp.com",
  databaseURL: "https://sin-azucar.firebaseio.com",
  projectId: "sin-azucar",
  storageBucket: "sin-azucar.appspot.com",
  messagingSenderId: "542047715275",
  appId: "1:542047715275:web:ccb91ad3e16a22765e004e"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
}
export default Firebase;