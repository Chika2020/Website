import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import FadeIn from '../shared/FadeIn';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { title, skills: skillList } = skills;

  if (!skillList || skillList.length === 0) return null;

  return (
    <section id="skills">
      <Container>
        <Title title={title || 'Skills'} />
        <Row className="skills-wrapper justify-content-center">
          {skillList.map(({ id, name, icon }) => (
            <Col key={id} xs={4} sm={3} md={2} className="skills-wrapper__item">
              <FadeIn direction="bottom" duration={0.6} delay={0.1}>
                <i className={`${icon} colored`} title={name} aria-label={name} />
                <p>{name}</p>
              </FadeIn>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
