import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, direction = 'bottom', duration = 1, delay = 0, distance = 30 }) => {
  let x = 0;
  let y = 0;
  if (direction === 'left') {
    x = -distance;
  } else if (direction === 'right') {
    x = distance;
  } else if (direction === 'bottom') {
    y = distance;
  }
  const initial = {
    opacity: 0,
    x,
    y,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
