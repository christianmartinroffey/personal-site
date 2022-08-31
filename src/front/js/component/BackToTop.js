import React, { useContext, useState, useEffect} from "react";

function BackToTop() {

  //new image on scroll
  const [scrolled, setScrolled] = useState();
  const initScrollBehaviour = () => {
    let y = window.scrollY;
    setScrolled(y);
    console.log(y, "scrolled");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => initScrollBehaviour());
  }, []);

  return (
    <div id="bottom-right" className='container d-flex'>
        <div className='row'>
        <h2 className='col-6'>C.</h2>
       {scrolled > 400 ?  <a href="#" className='col-6'>BACK TO TOP</a> : "" }
        </div>
    </div>
  )
}

export default BackToTop