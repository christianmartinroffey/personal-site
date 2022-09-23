import React, {useRef, useState} from 'react'
import "../../styles/customstyles.css/contact.css"
import emailjs from 'emailjs-com';


function Contact() {

  // const form = useRef();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  function sendFormToEmail(e) {
    e.preventDefault();

    emailjs.send("service_413ln8b","template_jjc1vn5",{
      user_name: name,
      user_email: email,
      message: message,
      }, '63QeZSHC8DprIwGvF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName("");
      setEmail("");
      setMessage("");
      alert("thanks for submitting, I'll get back you soon!")
  };

 

  return (

    <div className="wrapper pt-5" id="dark-page"> 
    <form className="form"  onSubmit={sendFormToEmail}>
      <div className="pageTitle title">Get In Touch </div>
      <div className="title">Add your details below so I can reach out and connect.</div>
      <input type="text" className="name formEntry"  placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} ></input>
      <input type="email" className="email formEntry"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
      <textarea className="message formEntry" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button className="submit formEntry btn-primary" >Submit</button>
    </form>
    </div>

    
  )
}

export default Contact

