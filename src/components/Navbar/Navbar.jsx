import React, { useContext, useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Navbar = () => {
  const { navbar } = useContext(PortfolioContext);
  const { brand, links } = navbar;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BSNavbar
      expand="md"
      fixed="top"
      className={`portfolio-navbar${isScrolled ? ' scrolled' : ''}`}
    >
      <Container>
        <BSNavbar.Brand href="/" className="portfolio-navbar__brand">
          {brand || 'CN'}
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {links &&
              links.map(({ id, label, to }) => (
                <Link
                  key={id}
                  to={to}
                  smooth
                  duration={1000}
                  offset={-70}
                  className="nav-link portfolio-navbar__link"
                  activeClass="active"
                  spy
                >
                  {label}
                </Link>
              ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
