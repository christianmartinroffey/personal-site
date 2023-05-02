import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import  DarkModeSwitch from "./pages/darkModeSwitch.js";
import injectContext from "./store/appContext";
import Avatars from "./component/Avatars.js";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Modal  from "./component/Modal.js";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Location from "./pages/location";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/dark">
							<DarkModeSwitch />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/avatars">
							<Avatars />
						</Route>
						<Route exact path="/modal">
							<Modal />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/projects">
							<Projects />
						</Route>
						<Route exact path="/location">
							<Location />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
