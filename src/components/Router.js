import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Profile from "../pages/Profile";
import Receta from "../pages/Receta";
import AddReceta from "../pages/addReceta";
import ListReceta from "../pages/ListRecetas";
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
					<Route path="/receta/:idreceta" component={Receta} />
					<Route path={["/NuevaReceta","/EditarReceta/:idreceta"]} component={AddReceta} />
					<Route path="/:usuario/recetas" component={ListReceta} />
					<Route exact path="/home" component={Main} />
					<Route exact path="/" component={Main} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
