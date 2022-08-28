import React, { useContext, useState, useEffect} from "react";

function UnsplashAPIIMG() {

    const [generatedImage, setGeneratedImage] = useState();

  

 const onClickImage = (() => {
    
    fetch('https://api.unsplash.com/photos/random?client_id=pP2fYaH1QhfhZc92OIiHamCbW_BlQAm1_b8-kHjRL38')
    .then((response) => response.json())
    .then((data) => setGeneratedImage(data))
    .then((data) => console.log(data));

   
    console.log(generatedImage, randomImg, "image deets");
    const randomImg = generatedImage.urls;
    console.log(randomImg, "in an array");
  });


  return (
    <div>
    <p>image</p>
   <button onClick={onClickImage}>Click for image</button>
    </div>
  )
}

export default UnsplashAPIIMG