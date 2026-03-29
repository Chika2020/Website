import React from 'react';
import PropTypes from 'prop-types';

const images = import.meta.glob('../../images/*.{jpg,png,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const ProjectImg = ({ filename, alt }) => {
  const src = images[`../../images/${filename}`];
  if (!src) return null;
  return <img className="img-fluid" src={src} alt={alt} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
