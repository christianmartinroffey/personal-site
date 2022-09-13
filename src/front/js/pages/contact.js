import React from 'react'
import "../../styles/customstyles.css/contact.css"

function Contact() {

const sendEmail = () =>{
console.log("button clicked");

}

  return (

    <div className='pt-5 pb-5'>
    <div className="wrapper pt-5 pb-5"> 

    <form className="form">
      <div className="pageTitle title">Get In Touch </div>
      <div className="secondaryTitle title">Add your details below so I can reach out, or download my CV ...  <a className='form-dowload-link' href="">here</a></div>
      <input type="text" className="name formEntry" placeholder="Name" ></input>
      <input type="text" className="email formEntry" placeholder="Email"></input>
      <textarea className="message formEntry" placeholder="Message"></textarea>
      <button className="submit formEntry btn-primary" onClick={sendEmail}>Submit</button>
    </form>
    </div>
</div>
    
  )
}

export default Contact