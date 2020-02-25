import React from "react";
import MyNavbar from "./Navbar";
import "firebase/performance";
import { AuthCheck } from "reactfire";
import 'firebase/auth';
import LogIn from "../pages/LogIn";
export default function Layout(props) {
	return (
		<React.Fragment>
		<AuthCheck fallback={<LogIn/>}>				
					<MyNavbar />
					{props.children}
			</AuthCheck>
		</React.Fragment>
	);
}
