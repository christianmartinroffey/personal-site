import React from 'react'
import "../../styles/customstyles.css/contact.css"

function Contact() {

const sendEmail = () =>{
console.log("button clicked");
}

  return (

    <div className="wrapper"> 
    <form className="form"></form>
      <div className="pageTitle title">Get In Touch </div>
      <div className="secondaryTitle title">Add your details below so I can reach out.</div>
      <input type="text" className="name formEntry" placeholder="Name" ></input>
      <input type="text" className="email formEntry" placeholder="Email"></input>
      <textarea className="message formEntry" placeholder="Message"></textarea>
      <button className="submit formEntry" onClick={sendEmail()}>Submit</button>
      </div>
 
  )
}

export default Contact