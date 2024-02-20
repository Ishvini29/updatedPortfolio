import "./formStyles.css"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit] = useForm("xwkgozwk");
  if (state.succeeded) {
      return <p><center>Your message has been successfully sent. Thank you for contacting me!</center></p>;
  }
  return (
    <div className="form">
        {/* <form   action="https://formspree.io/f/xwkgozwk" method="POST"> */}
        <form onSubmit={handleSubmit}>


        <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

    <label>Subject</label>
      <textarea
        rows='6'
        placeholder="Type your message here"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            <button className="btn"type="submit"disabled={state.submitting}>Submit</button>
        </form>
    </div>
  )
}

export default Form