import React from "react";
import {Switch, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { App, UserListApp, UserDetailApp } from "../containers";


const routes = (
    <BrowserRouter>
		<Switch>
        	<Route exact path="/" component={App}></Route>
			<Route exact path="/users" component={UserListApp}></Route>
			<Route path="/users/:id" component={UserDetailApp}></Route>
      	</Switch>		
	</BrowserRouter>
);
export default routes;