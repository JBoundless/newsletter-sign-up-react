import React, { useState } from 'react';
import './style.css';
import signup from './images/illustration-sign-up-desktop.svg';
import Success from './Success';
import {useFormik} from 'formik';

export default function App() {

  const [success, setSuccess] = useState(false);

    // Logic behind form submission to Success.js
    const validate = (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Valid email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Valid email required";
      }

      return errors;
    };
  
    const formik = useFormik({
      initialValues: {
        email: "",
      },
      validate,
      onSubmit: (values) => {
        console.log("Form submitted successfully")
        setSuccess(true);
      },
    })
  
  return (
    <div>
    {!success && (<div>
      <div className="newsletter-form">
        <section className="text">
          <h2>Stay updated!</h2>
          <p>
            Join 60,000+ product managers receiving monthly
            updates on:
          </p>
          <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>{' '}
          <li>And much more!</li>
          </ul>
          <form className="form" onSubmit={formik.handleSubmit}>
            <article>
            <label htmlFor="email" className="email-text">Email address:</label>{' '}
            {formik.errors.email ? <p className="error-message">{formik.errors.email}</p> : null}
            </article>
            <input type="email" name="email" id="email" placeholder="email@company.com" value={formik.values.email} onChange={formik.handleChange} />
            <button type="submit" onClick={formik.handleSubmit}>Subscribe to monthly newsletter</button>
          </form>
        </section>
        <section className="form-img">
          <img src='https://raw.githubusercontent.com/JBoundless/newsletter-sign-up-react/main/src/images/illustration-sign-up-desktop.svg' />
        </section>
      </div>
      </div>)}
      {success && <Success setSuccess={setSuccess} email={formik.values.email} />}
    </div>
  );
};
