import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../../data/constants";
import HeroImg from "../../images/HeroImage.jpg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 50px ${({ theme }) => theme.primary + "30"};
  overflow: hidden;
  z-index: 1;
  background: ${({ theme }) => theme.card_light};

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  padding: 10px 14px;
  text-align: center;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.primary + "30"};

  @media (max-width: 640px) {
    bottom: 15%;
    width: 80%;
    padding: 8px 12px;
  }
`;

const MilestoneTitle = styled.div`
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3;
  color: white;
  width: 100%;

  @media (max-width: 640px) {
    font-size: 9px;
  }
`;

const MilestoneCompany = styled.div`
  font-size: 8px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Badge = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: 8px;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 8px;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
  text-transform: uppercase;
`;

const HeroMediaCarousel = () => {
  const allHighlights = experiences.reduce((acc, exp) => {
    if (exp.highlights) {
      return [
        ...acc,
        ...exp.highlights.map((h) => ({ ...h, company: exp.company })),
      ];
    }
    return acc;
  }, []);

  const slides = [
    {
      title: "Senior Software Engineer",
      company: "Jaseem Sabith",
      image: HeroImg,
      isProfile: true,
    },
    ...allHighlights,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[currentIndex];

  return (
    <Container>
      <AnimatePresence mode="wait">
        <ImageWrapper
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          {current.isProfile ? null : <Badge>Milestone</Badge>}
          <StyledImage src={current.image} alt={current.title} />
          
          {!current.isProfile && (
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MilestoneCompany>{current.company}</MilestoneCompany>
              <MilestoneTitle>{current.title}</MilestoneTitle>
            </Overlay>
          )}
        </ImageWrapper>
      </AnimatePresence>
    </Container>
  );
};

export default HeroMediaCarousel;
