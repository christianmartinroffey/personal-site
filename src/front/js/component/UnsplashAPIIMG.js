import React, { useContext, useState, useEffect} from "react";

function UnsplashAPIIMG() {

    const [generatedImage, setGeneratedImage] = useState();

  

useEffect(() => {
    
    fetch('https://api.unsplash.com/photos/random?client_id=pP2fYaH1QhfhZc92OIiHamCbW_BlQAm1_b8-kHjRL38')
    .then((response) => response.json())
    .then((data) => setGeneratedImage(data))
    .then((data) => console.log(data));

   
  });

    
console.log(generatedImage, "image deets");

  return (
    <div>
    <p>image</p>
   
    </div>
  )
}

export default UnsplashAPIIMG