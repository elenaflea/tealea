import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xgerzrno");
  if (state.succeeded) {
      return <p className='footerlink green'>Merci pour votre message!</p>;
  }
  return (
      <form className='App' onSubmit={handleSubmit}>
      <label className='about' htmlFor="email">
        Votre e-mail
      </label>
      <input className='inputcontact'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <br/>
      <label className='about' htmlFor="message">
        Votre message
      </label>
      <textarea className='inputcontact'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btnSend' type="submit" disabled={state.submitting}>
        Envoyer
      </button>
    </form>
  );
}
export default ContactForm;