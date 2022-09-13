import React, { useContext, useState, useEffect} from "react";
import BackToTop from "../component/BackToTop";
import "../../styles/home.css"
import Social from "./Social";

export const Footer = () => (

	/////// MAKE FOOTER STICKY AT X px SCROLLED ///////
 //new image on scroll
//     const [scrolled, setScrolled] = useState();
//     const initScrollBehaviour = () => {
//       let y = window.scrollY;
//       setScrolled(y);
//       console.log(y, "scrolled");
//     };
  
//     useEffect(() => {
//       window.addEventListener("scroll", () => initScrollBehaviour());
//     }, []);
  
// if (scrolled == 300 ){
//     const fetchRequest = async () => {
//     const data = await fetch(`https://api.unsplash.com/photos/random?client_id=${clientID}`)  

//     const dataJ = await data.json();
//     // setRes(dataJ.results);
//     setRes(dataJ.urls.regular);
//     console.log(dataJ.urls.regular, "raw");
// };
// fetchRequest();
// };


	
	<footer className="container-fluid d-flex text-center" id="dark-page" >
		
		<Social></Social>
		 <div id="bottom-right" className='container d-flex text-center'></div>
		<div className=" footer mt-auto py-3 ">
		<div id='' className="">
		<p>
			Website design, animation and code by Christian M-R
		</p>
		</div>
		</div>
		{/* <BackToTop></BackToTop> */}
	</footer>
);
