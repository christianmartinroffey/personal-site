import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import anime from 'animejs/lib/anime.es.js';
import "../../styles/home.css";

import Social from "../component/Social";
import UnsplashAPIIMG from "../component/UnsplashAPIIMG";
import PreviousExperience from "../component/PreviousExperience";
import AboutMe from "../component/AboutMe";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const darkText = store.darkModeText;
	const toggle = store.toggle;
	console.log(toggle);
		
 
  


  return (
	<div className="">
		
		<div id='dark-page' className="text-center">
		<AboutMe/>
		<PreviousExperience/>
		<UnsplashAPIIMG/>
		</div>
	
		<Social/>
	</div>

    
  )
};
