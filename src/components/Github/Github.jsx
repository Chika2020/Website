import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import FadeIn from '../shared/FadeIn';

const Github = () => {
  const { github } = useContext(PortfolioContext);
  const { username, showStats } = github;

  if (!showStats || !username) return null;

  return (
    <section id="github">
      <Container>
        <Title title="GitHub" />
        <FadeIn direction="bottom" duration={1} delay={0.3}>
          <div className="github-wrapper">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&count_private=true&hide_border=true`}
              alt={`${username} GitHub stats`}
              className="img-fluid"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true`}
              alt={`${username} top languages`}
              className="img-fluid"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Github;
