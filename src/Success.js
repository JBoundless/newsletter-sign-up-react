import React, {Component} from 'react';
import './style.css';
import iconSuccess from './images/icon-success.svg';

export default function Success({email, setSuccess}) {
  return (
    <div className="success">
      <img src='https://raw.githubusercontent.com/JBoundless/newsletter-sign-up-react/main/src/images/icon-success.svg' />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
      </p>
      <button onClick={() => setSuccess(false)}>Dismiss message</button>
    </div>
  );
}
