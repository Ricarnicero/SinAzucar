import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Receta from "./pages/Receta";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/" component={Main} />
          <Route exact path="/Receta" component={Receta} />
          <Route exact path="/Profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
