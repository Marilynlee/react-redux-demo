import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import routes from "./routes"

let store = configureStore();
let rootEle = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
		{routes}
	</Provider>,
    rootEle
);