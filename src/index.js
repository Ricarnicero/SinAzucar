import React from "react";
import {render} from "react-dom";
import * as serviceWorker from "./serviceWorker";
import MyRouter from "./components/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseAppProvider,SuspenseWithPerf } from 'reactfire';
import 'firebase/performance';

const config = {
	apiKey: "AIzaSyCdzPSaOANFKK-qT66cTBw0wv8A3N-QNms",
	authDomain: "sin-azucar.firebaseapp.com",
	databaseURL: "https://sin-azucar.firebaseio.com",
	projectId: "sin-azucar",
	storageBucket: "sin-azucar.appspot.com",
	messagingSenderId: "542047715275",
	appId: "1:542047715275:web:ccb91ad3e16a22765e004e"
};

function App(){
return (<FirebaseAppProvider firebaseConfig={config}>
		<SuspenseWithPerf
				fallback={<p>Cargando</p>}
				traceId={"load-status"}>
			<MyRouter />
		</SuspenseWithPerf>
	</FirebaseAppProvider>)
}
render(<App/>,document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
