import React from 'react'
import { useRef } from 'react';
import { Form , Row, Col , Button} from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import "../css/formulario.css"

const MainContacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_us5oxmx', 'template_jargdh8', form.current, {
        publicKey: 'vbx0tc5p1_8CUSD0b',
      })
      .then(
        () => {
          alert("Correo enviado con exito !");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className='form-container'>
      <h2 className='title' >Contactame</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label>ASUNTO</label>
      <input type="text" name="user_name" />
      <label>EMAIL</label>
      <input type="email" name="user_email" />
      <label>MENSAJE</label>
      <textarea name="message" />
      <input type="submit"  className='submit-button'  value="Send" />
    </form>
    </div>
  )
}

export default MainContacts
