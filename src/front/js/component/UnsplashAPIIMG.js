import React, { useContext, useState, useEffect} from "react";

function UnsplashAPIIMG() {

    const [generatedImage, setGeneratedImage] = useState();
    const [res, setRes] = useState();
    const clientID = "pP2fYaH1QhfhZc92OIiHamCbW_BlQAm1_b8-kHjRL38";
    
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

// console.log(res, "stored")

//new image onload 
useEffect(() => {
  const fetchRequest = async () => {
        const data = await fetch(`https://api.unsplash.com/photos/random?client_id=${clientID}`)  
    
        const dataJ = await data.json();
        // setRes(dataJ.results);
        setRes(dataJ.urls.regular);
        console.log(dataJ.urls.regular, "raw");
    };
    fetchRequest();

}, []);
  
  return (
    <div className="container-flex">
   {res == undefined ? (<img className="pop-in" src="https://images.unsplash.com/photo-1661565882777-5c132e11167f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"></img> ) : <img src ={res}></img>
}
{/* <button onClick={onClickImage}>Click for image</button>    */}
    </div>
  )
}

export default UnsplashAPIIMG