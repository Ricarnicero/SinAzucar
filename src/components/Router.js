import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Layout from "./Layout";
import "firebase/performance";


export default function MyRouter() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/" component={Main} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
