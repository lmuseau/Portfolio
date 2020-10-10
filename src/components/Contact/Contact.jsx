import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import './Contact.css';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <form
              method="POST"
              name="contact"
              className="contact-box"
              netlify
              data-netlify-recaptcha="true"
              data-netlify="true"
            >
              <div className="content">
                {/* <h2>Let's Work</h2> */}
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="field"
                  placeholder="Your Name"
                />
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="field"
                  placeholder="Your Email"
                />
                <input
                  name="phone"
                  id="phone"
                  type="text"
                  className="field"
                  placeholder="Your Phone"
                />
                <textarea
                  name="message"
                  id="message"
                  className="field area"
                  placeholder="Message"
                />
                <div data-netlify-recaptcha="true" />
                <button type="submit" className="btn">
                  Send
                </button>
              </div>
              <div className="">
                <p className="contact-wrapper__text">{cta}</p>
              </div>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
