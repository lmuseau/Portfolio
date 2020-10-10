import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import './Contact.css';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact3', ...formState }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="contact-box">
              <form
                name="contact3"
                method="post"
                data-netlify="true"
                onSubmit={handleSubmit}
                data-netlify-honeypot="bot-field"
              >
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact3" />
                <div className="content">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    onChange={handleChange}
                    value={formState.name}
                    className="field"
                    placeholder="Your Name"
                  />
                  <input
                    name="email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={formState.email}
                    className="field"
                    placeholder="Your Email"
                  />
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    onChange={handleChange}
                    value={formState.phone}
                    className="field"
                    placeholder="Your Phone"
                  />
                  <textarea
                    name="message"
                    id="message"
                    onChange={handleChange}
                    value={formState.message}
                    className="field area"
                    placeholder="Message"
                  />
                  <div data-netlify-recaptcha="true" />
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </form>
              <div className="">
                <p className="contact-wrapper__text">{cta}</p>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
