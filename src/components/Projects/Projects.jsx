import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import FadeIn from '../shared/FadeIn';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <FadeIn direction={isDesktop ? 'left' : 'bottom'} duration={1} delay={0.5}>
                    <div className="project-wrapper__text">
                      <h1 className="project-wrapper__text-title">{title || 'Project Title'}</h1>
                      <div>
                        <p>{info || '  '}</p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url}
                        >
                          See Live
                        </a>
                      )}
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </FadeIn>
                </Col>
                <Col lg={8} sm={12}>
                  <FadeIn direction={isDesktop ? 'right' : 'bottom'} duration={1} delay={1}>
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <div className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </a>
                    </div>
                  </FadeIn>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
