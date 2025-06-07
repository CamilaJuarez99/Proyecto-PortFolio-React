import React from "react";
import { useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "../css/form.css"

const MainContacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_us5oxmx", "template_jargdh8", form.current, {
        publicKey: "vbx0tc5p1_8CUSD0b",
      })
      .then(
        () => {
          alert("Correo enviado, en breve te voy a contestar")
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form-container ">
      <br />
      <h2 className="title-form">Contactame</h2>
      <form ref={form} onSubmit={sendEmail} className="field">
        <label>Asunto</label>
        <input type="text" name="user_subject" />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <label>Mensaje</label>
        <textarea name="message"  />
        <br />
        <input type="submit" className="submit-button" value="Send" />
      </form>
      <br />
    </div>
  );
};

export default MainContacts;
