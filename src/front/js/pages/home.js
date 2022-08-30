import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import anime from 'animejs/lib/anime.es.js';
import "../../styles/home.css";
import BackToTop from "../component/BackToTop";
import Social from "../component/Social";
import UnsplashAPIIMG from "../component/UnsplashAPIIMG";
import PreviousExperience from "../component/PreviousExperience";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const darkText = store.darkModeText;
	const toggle = store.toggle;
	console.log(toggle);
		
  return (
	<div className="">
		<UnsplashAPIIMG/>
		<div id='dark-page' className="text-center">
		<PreviousExperience/>
		</div>
		<Social/>
	</div>

    
  )
};
