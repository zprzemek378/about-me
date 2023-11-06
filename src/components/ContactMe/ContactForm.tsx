import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onSend: Function;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSend }) => {
  const form = useRef();
  const onSubmit = (e: any) => {
    e.preventDefault();
    onSend();

    emailjs
      .sendForm(
        "service_d0tbzsz",
        "template_bxyh79a",
        // @ts-ignore
        form.current,
        "ttQxQM75wJU8v_Jmr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setClientName("");
    setClientEmail("");
    setClientMessage("");
  };

  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  return (
    <div className="contactForm">
      <h1 className="text-3xl">Send me a message!</h1>
      {/* @ts-ignore */}
      <form ref={form} onSubmit={onSubmit}>
        <div className="formElement">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="inputText"
            placeholder="John Doe"
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            name="user_name"
          />
        </div>
        <div className="formElement">
          <label htmlFor="name">Email:</label>
          <input
            type="text"
            className="inputText"
            placeholder="john.doe@example.com"
            required
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            name="user_email"
          />
        </div>
        <div className="formElement">
          <label htmlFor="name">Message:</label>
          <textarea
            className="inputText"
            placeholder="Hello! I would like to ask about..."
            required
            value={clientMessage}
            onChange={(e) => setClientMessage(e.target.value)}
            name="message"
          />
        </div>
        <button className="activeButton text-cyan-200 bg-neutral-800">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
