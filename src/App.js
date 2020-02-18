import React, { useState } from "react";
import LogIn from "./pages/LogIn";
import Firebase from "./firebase/Firebase"

export default function App() {
  const [loginFields,setLogin] = useState({email:'ads@asd.com',pass:'asdasd'})

  const LogInOnClickButton = event => {
    Firebase.doSignInWithEmailAndPassword(loginFields.email, loginFields.pass)
    .then(res => {
      console.log(res)
    })
    .catch(function(error) {
      console.log(error)
    });
  }

  const inputChange = event => {
    setLogin({...loginFields,[event.target.name]:event.target.value})
  }

  var renderPage = <LogIn buttonClick={LogInOnClickButton} inputChange={inputChange} email={loginFields.email} pass={loginFields.pass}/>
        
  return renderPage

}


