import React from 'react';
import { Container } from 'react-bootstrap';
import FadeIn from '../components/shared/FadeIn';

const NotFound = () => (
  <section id="hero">
    <Container>
      <FadeIn direction="bottom" duration={1} delay={0.5}>
        <h1 className="hero-title text-center">
          Sorry, this path does not exist{' '}
          <span role="img" aria-label="sad face">
            😞
          </span>
        </h1>
      </FadeIn>
      <FadeIn direction="bottom" duration={1} delay={1}>
        <p className="hero-cta justify-content-center">
          <a className="cta-btn cta-btn--hero" href="/">
            Go back
          </a>
        </p>
      </FadeIn>
    </Container>
  </section>
);

export default NotFound;
