import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import FadeIn from '../shared/FadeIn';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <Container>
        <FadeIn direction={isDesktop ? 'left' : 'bottom'} duration={1} delay={0.5}>
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Chika Nwachukwu'}</span>
            <br />
            {subtitle || 'And I'} <span className="text-color-main">{name || 'Code'}</span>
          </h1>
        </FadeIn>
        <FadeIn direction={isDesktop ? 'left' : 'bottom'} duration={1} delay={1}>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="intro" smooth duration={1000}>
                {cta || 'Want to know more'}
              </Link>
            </span>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Header;
