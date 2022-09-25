import React from 'react'
import "../../styles/home.css"
import anime from 'animejs'

function PageSeparator() {


  const wave = document.querySelector(".module__wave path")


// const animation = TweenMax.to(wave, 1, {
//   morphSVG: wave.dataset.to,
//   ease: Power1.easeOut,
//   paused: true
// })

window.addEventListener('scroll', () => {
  const progress = Math.max(Math.min(scrollY, 200), 1) / 50
  animation.progress(-progress)
})

  return (
    <div></div>
  //   <div class="module">
  //   <svg class="module__wave" viewBox="0 0 1000 158">
  //   <path d="M1000,30.1V158H0V0c169.7,238.5,374.3-76,502.6,106.8
  //   C615.7,268.2,759.9-15.4,1000,30.1z" data-to="M1000,157v1H0v-1h502.6H1000z" />
  // </svg>
 
  // </div>
  )
}

export default PageSeparator