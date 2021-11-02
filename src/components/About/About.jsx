import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import downloadFile from './file.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || "Hi! I'm Chika Nwachukwu and welcome to my page!"}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "I'm a young software engineering professional who loves to learn and apply his knowledge. I think software engineering is definitely the best place where one can really see the impact and value they bring on a daily basis."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "A little background on me, as my name might suggest I'm not just American. I'm Nigerian as well! Although I was born in the US. I was raised in a Nigerian household and was raised in the culture. I've actually visited quite a few times. I also went to Villanova University for my undergraduate degree in Computering Engineering so Go Cats! I'll keep intros brief so if you want to know more about me or reach out please just scroll on down to the bottom of this page and thanks for reading."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={downloadFile}
                      download="ChikaNwachukwuResume.pdf"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
