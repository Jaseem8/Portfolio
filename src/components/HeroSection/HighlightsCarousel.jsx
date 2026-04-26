import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../../data/constants';

const CarouselContainer = styled(motion.div)`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 280px;
  background: ${({ theme }) => theme.card + 'CC'};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.primary + '40'};
  border-radius: 20px;
  padding: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  z-index: 10;
  cursor: pointer;

  @media (max-width: 960px) {
    bottom: -40px;
    right: 50%;
    transform: translateX(50%);
    width: 260px;
  }

  @media (max-width: 640px) {
    width: 240px;
    bottom: -20px;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -10px;
  left: 12px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.primary + '40'};
`;

const HighlightImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HighlightTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CompanyName = styled.div`
  font-size: 9px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 6px;
  width: max-content;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 4px;
  
  background: ${({ company, theme }) => {
    const name = company?.toLowerCase() || '';
    if (name.includes('comera')) return '#007AFF';
    if (name.includes('chegg')) return '#FF9900';
    return theme.primary;
  }};
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ active, theme }) => active ? theme.primary : theme.text_secondary + '40'};
  transition: all 0.3s ease;
`;

const HighlightsCarousel = () => {
  // Flatten all highlights from all experiences
  const allHighlights = experiences.reduce((acc, exp) => {
    if (exp.highlights) {
      return [...acc, ...exp.highlights.map(h => ({ ...h, company: exp.company }))];
    }
    return acc;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allHighlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [allHighlights.length]);

  const currentHighlight = allHighlights[currentIndex];

  if (allHighlights.length === 0) return null;

  return (
    <CarouselContainer
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => window.open(currentHighlight.link, '_blank')}
    >
      <Badge>Company Milestone</Badge>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.4 }}
        >
          <HighlightImage src={currentHighlight.image} alt={currentHighlight.title} />
          <Content>
            <CompanyName company={currentHighlight.company}>{currentHighlight.company}</CompanyName>
            <HighlightTitle>{currentHighlight.title}</HighlightTitle>
          </Content>
        </motion.div>
      </AnimatePresence>
      <Dots>
        {allHighlights.map((_, i) => (
          <Dot key={i} active={i === currentIndex} />
        ))}
      </Dots>
    </CarouselContainer>
  );
};

export default HighlightsCarousel;
