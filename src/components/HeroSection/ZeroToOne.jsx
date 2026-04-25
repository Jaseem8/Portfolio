import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  margin: 0 4px;
`;

const Zero = styled(motion.span)`
  color: #ff4d4d; /* Reddish */
`;

const One = styled(motion.span)`
  color: #00ff88; /* Greenish */
`;

const Arrow = styled(motion.span)`
  color: ${({ theme }) => theme.primary};
  margin: 0 2px;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
`;

const ZeroToOne = () => {
  return (
    <Container>
      <Zero
        initial={{ scale: 1, opacity: 0.8 }}
        whileInView={{ scale: [1, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
      >
        0
      </Zero>
      <Arrow
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 'auto', opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatDelay: 2.2 }}
      >
        →
      </Arrow>
      <One
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 2.5 }}
      >
        1
      </One>
    </Container>
  );
};

export default ZeroToOne;
