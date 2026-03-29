import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from '../shared/FadeIn';

const Title = ({ title }) => (
  <FadeIn direction="bottom" duration={1} delay={0.3}>
    <h2 className="section-title">{title}</h2>
  </FadeIn>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
