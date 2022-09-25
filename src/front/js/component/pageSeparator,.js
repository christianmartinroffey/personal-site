import React, { useContext, useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function PageSeparator() {

    const [scrolled, setScrolled] = useState();
  const initScrollBehaviour = () => {
    let y = window.scrollY;
    setScrolled(y);
    console.log(y, "scrolled");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => initScrollBehaviour());
  }, []);


  window.addEventListener('scroll', () => {
    if(scrollY >= 1000){
     anime({
     targets: '.module__wave path',
     translateY: 250,
    //  direction: 'alternate',
    
     easing: 'spring(1, 80, 10, 0)'
     })}
     else
        anime({
            targets: '.module__wave path',
            translateY: 0,
           //  direction: 'alternate',
           
            easing: 'spring(1, 80, 10, 0)'
            })
     
    
   });
     
  return (
    <div className='container-fluid'>
<div class="module">
    <svg class="module__wave" viewBox="0 0 1000 158">
    <path fill="#fff" d="M1000,30.1V158H0V0c169.7,238.5,374.3-76,502.6,106.8
    C615.7,268.2,759.9-15.4,1000,30.1z" data-to="M1000,157v1H0v-1h502.6H1000z" />
  </svg>
 
  </div>

    </div>
  )
}

export default PageSeparator