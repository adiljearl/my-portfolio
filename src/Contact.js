import { useRef } from 'react';
import './App.css';
import SocialLinks from './SocialLinks';
import emailjs from '@emailjs/browser';

  /***********************
    Contact Component
   ***********************/
  
    const Contact = props => {
      const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dpy4ztg', 'template_cxr784r', form.current, {
            publicKey: 'QsW4WsplM94w2ycv7',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
      };
        return (
          <section id="contact">
            <div className="container">
              <div className="heading-wrapper">
                <div className="heading">
                  <p className="title">
                    Want to <br />
                    contact me?
                  </p>
                  <p className="separator" />
                  <p className="subtitle">
                    Please, use the form below to contact me {''}:
                  </p>
                </div>
                <SocialLinks />
              </div>
              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" name="from_name" type="text" required />
                <input placeholder="Email/Phone" name="user_email" type="text" required />
                <textarea placeholder="Message" type="text" name="message" />
                <input className="button" id="submit" value="Submit" type="submit" />
              </form>
            </div>
          </section>
        );
      };

      export default Contact;