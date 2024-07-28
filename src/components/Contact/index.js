import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import React, { useEffect, useState,useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm=useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_modcl5l', 'template_7pplxcm', refForm.current, '-VhdhI0YxZdgD749t')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1> 
                    <AnimatedLetters strArray={["C","o","n","t","a","c","t"," ", "m","e"]}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>Thank you for visiting my portfolio! I’m passionate about creating innovative software solutions and would love to hear from you.
                     Whether you have a question, a project idea, or just want to connect, feel free to reach out. Here are the ways you can contact me:</p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}> 
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />

                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="email" required />

                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required></input>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
            </div>
        </div>
    </>
  );
}
//sendForm("service_modcl5l","template_8004ser","form.current","-VhdhI0YxZdgD749t")

export default Contact;