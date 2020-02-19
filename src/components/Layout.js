import React from "react";
import Navbar from "./Navbar";
import { SuspenseWithPerf } from "reactfire";
import "firebase/performance";

export default function Layout(props) {
	return (
		<React.Fragment>
			<SuspenseWithPerf
				fallback={"loading burrito status..."}
				traceId={"load-status"}>
				<Navbar />
				{props.children}
			</SuspenseWithPerf>
		</React.Fragment>
	);
}
