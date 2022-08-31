import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import anime from 'animejs/lib/anime.es.js';
import "../../styles/home.css";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
    const darkOnClick = () =>{
		actions.turnOnDarkMode()
    };
		

	return (
		<nav className="navbar navbar-light bg-light p-4">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Welcome</span>
				</Link>
				<div id=''>
				<Link to="/time">
					<span className="navbar-brand mb-0 h1">Time To Waste?</span>
				</Link>
            <svg onClick={darkOnClick} id="dark_mode" width="25" height="25" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg">
			    <path className="moon" d="M 27.5 0 C 34.791 0 41.79 2.899 46.945 8.055 C 52.101 13.21 55 20.209 55 27.5 C 55 34.791 52.101 41.79 46.945 46.945 C 41.79 52.101 34.791 55 27.5 55 C 20.209 55 13.21 52.101 8.055 46.945 C 2.899 41.79 0 34.791 0 27.5 C 0 20.209 2.899 13.21 8.055 8.055 C 13.21 2.899 20.209 0 27.5 0 Z" fill="#fee140"/>   
            </svg>
    </div>
			</div>
		</nav>
	);
};
