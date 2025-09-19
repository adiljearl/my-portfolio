import { useRef } from 'react';
import './App.css';
import SocialLinks from './SocialLinks';
import emailjs from '@emailjs/browser';

  /***********************
    Contact Component
   ***********************/
  
  const Contact = props => {
      const form = useRef();
      
      const sendToWhatsApp = (name, email, message) => {
        const whatsappNumber = '919670433355'; // Your WhatsApp number with country code
        const text = `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email/Phone:* ${email}\n*Message:* ${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
      };
      
      const sendEmail = (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const name = formData.get('from_name');
        const email = formData.get('user_email');
        const message = formData.get('message');
    
        // Send email via EmailJS
        emailjs
          .sendForm('service_dpy4ztg', 'template_cxr784r', form.current, {
            publicKey: 'QsW4WsplM94w2ycv7',
          })
          .then(
            () => {
              console.log('Email sent successfully!');
              // Send to WhatsApp after successful email
              sendToWhatsApp(name, email, message);
            },
            (error) => {
              console.log('Email failed...', error.text);
              // Still send to WhatsApp even if email fails
              sendToWhatsApp(name, email, message);
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