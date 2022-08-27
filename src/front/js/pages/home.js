import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import anime from 'animejs/lib/anime.es.js';
import "../../styles/home.css";
import BackToTop from "../component/BackToTop";
import Social from "../component/Social";
import UnsplashAPIIMG from "../component/UnsplashAPIIMG";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const darkText = store.darkModeText;
	const toggle = store.toggle;
	console.log(toggle);
		
  return (
	<div className="">
		<div id='dark-page' className="text-center">
		
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a volutpat nulla. Nunc sed mattis odio. Mauris a nunc turpis. Nunc tristique est eget erat cursus gravida. Proin varius gravida nisl. Nullam sodales augue at venenatis venenatis. Duis ac molestie nisi. Maecenas sit amet imperdiet massa, imperdiet facilisis erat. Sed pellentesque, lectus et tincidunt maximus, sapien tortor consectetur ipsum, at vehicula risus mi a libero.</p>
		<p>Curabitur hendrerit ut augue sit amet feugiat. Morbi condimentum nec ligula ut dictum. Morbi in diam vel orci blandit finibus. In lobortis ligula ac ex dictum rutrum. Fusce eros sem, facilisis nec mauris sed, ornare molestie libero. Vestibulum lobortis lacus nibh, vel mollis elit condimentum et. In ac accumsan sapien, ut tincidunt enim. Pellentesque eget risus non nulla dapibus volutpat. Cras tempus dolor quis ipsum egestas consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget arcu sem. Integer sapien justo, sagittis sit amet elit ac, accumsan gravida sem. Sed auctor ante vel felis eleifend elementum. Nam blandit mi sit amet pharetra hendrerit. Morbi vitae sollicitudin nunc.</p>
		
		</div>
		<Social/>
		<UnsplashAPIIMG/>
	</div>

    
  )
};
