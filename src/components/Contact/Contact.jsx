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
            <div className="contact-box">
              <form
                name="contact1"
                method="post"
                data-netlify="true"
                onSubmit="submit"
                data-netlify-recaptcha="true"
              >
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact1" />
                <div className="content">
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
