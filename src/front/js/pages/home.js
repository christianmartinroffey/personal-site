import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import anime from 'animejs/lib/anime.es.js';
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);
	const darkText = store.darkModeText;
	const toggle = store.toggle;
	console.log(toggle);
		
  return (
	<div className="text-center">
    <div id='dark-page'>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a volutpat nulla. Nunc sed mattis odio. Mauris a nunc turpis. Nunc tristique est eget erat cursus gravida. Proin varius gravida nisl. Nullam sodales augue at venenatis venenatis. Duis ac molestie nisi. Maecenas sit amet imperdiet massa, imperdiet facilisis erat. Sed pellentesque, lectus et tincidunt maximus, sapien tortor consectetur ipsum, at vehicula risus mi a libero.</p>
    </div>
	</div>
    
  )
};
