import React, { useContext, useState, useEffect} from "react";

function UnsplashAPIIMG() {

    const [generatedImage, setGeneratedImage] = useState();
    const [res, setRes] = useState();
    const clientID = "pP2fYaH1QhfhZc92OIiHamCbW_BlQAm1_b8-kHjRL38";
    
  

//     const fetchRequest = async () => {
//     const data = await fetch(`https://api.unsplash.com/photos/random?client_id=${clientID}`)  

//     const dataJ = await data.json();
//     setRes(dataJ.results);
//     setRes(dataJ.urls.regular);
//     console.log(dataJ.urls.regular, "raw");

// };

// console.log(res, "stored")

    
// useEffect(() => {
//   fetchRequest();

// }, []);
  

// .then((response) => response.json())
//   .then((data) => setGeneratedImage(data.urls.regular))
//   .then((data) => console.log(data.urls.regular));

 
//   console.log(generatedImage, randomImg, "image deets");
//   const randomImg = generatedImage.urls.regular;
//   console.log(randomImg, "in an array");
// });
  return (
    <div>
    <p>image</p>
   {/* <button onClick={onClickImage}>Click for image</button> */}
    </div>
  )
}

export default UnsplashAPIIMG