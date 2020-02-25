import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Profile from "../pages/Profile";
import Receta from "../pages/Receta";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Layout from "./Layout";


export default function MyRouter(props) {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/perfil" component={Profile} />
					<Route exact path="/receta" component={Receta} />
					<Route exact path="/" component={Main} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
