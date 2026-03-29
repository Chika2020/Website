import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import FadeIn from '../shared/FadeIn';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <FadeIn direction="bottom" duration={1} delay={0.8}>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta || 'Would you like to work with me?'}</p>
            <p className="contact-wrapper__text">{cta || 'Would you like to connect?'}</p>
            <p className="contact-wrapper__text">{cta || 'Great!'}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/Chika2020'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Contact;
