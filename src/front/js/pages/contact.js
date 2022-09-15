import React, {useRef, useState} from 'react'
import "../../styles/customstyles.css/contact.css"
import emailjs, { init } from "@emailjs/browser";

function Contact() {

const [name, setName] = useState();
const [email, setEmail] = useState();
const [message, setMessage] = useState();

const fullMessage = name + email + message;

init(service_413ln8b);
const form = useRef();

const sendEmail = () =>{
console.log("button clicked");
alert("thanks for submitting!")

}

const downloadCV = () =>{
    alert("Currently being revamped!")
}

const sendFormToEmail = () => {
  e.preventDefault();
  emailjs.sendForm(service_413ln8b, template_jjc1vn5, fullMessage, "USER_ID").then(
    (result) => {
      alert("Message Sent Successfully");
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
}

  return (
    <div className="wrapper pt-5" id="dark-page"> 
    <form className="form" onSubmit={sendFormToEmail}>
      <div className="pageTitle title">Get In Touch </div>
      <div className="title">Add your details below so I can reach out, or download my CV ...  <a className='' onClick={downloadCV} href="">here.</a></div>
      <input type="text" className="name formEntry" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
      <input type="text" className="email formEntry" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <textarea className="message formEntry" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button className="submit formEntry btn-primary" onSubmit={sendEmail}>Submit</button>
    </form>
    </div>

    
  )
}

export default Contact