import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { experiences, education } from "../../data/constants";
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
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 80px 30px 25px;
  text-align: center;
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const MilestoneTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  color: white;
  max-width: 70%; /* Strict width to stay in safe center zone */
  margin: 0 auto;

  @media (max-width: 640px) {
    font-size: 11px;
    max-width: 80%;
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
  const allHighlights = [
    ...experiences.reduce((acc, exp) => {
      if (exp.highlights) {
        return [...acc, ...exp.highlights.map(h => ({ ...h, company: exp.company }))];
      }
      return acc;
    }, []),
    ...education.reduce((acc, edu) => {
      if (edu.highlights) {
        return [...acc, ...edu.highlights.map(h => ({ ...h, company: edu.school }))];
      }
      return acc;
    }, [])
  ];

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

  const academicRank = {
    title: "Rank 6 in Top Students (All Streams/Talents)",
    link: "https://www.university.youth4work.com/nit_calicut_national-institute-of-technology-calicut/report/5"
  };

  return (
    <Container>
      <AnimatePresence mode="wait">
        <ImageWrapper
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          onClick={() => current.isProfile ? window.open(academicRank.link, '_blank') : window.open(current.link, '_blank')}
          style={{ cursor: 'pointer' }}
        >
          {current.isProfile ? (
            <Badge style={{ background: '#FFD700', color: '#000' }}>🏆 Top Ranked</Badge>
          ) : (
            <Badge>Milestone</Badge>
          )}
          <StyledImage src={current.image} alt={current.title} />
          
          <Overlay
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MilestoneCompany style={current.isProfile ? { color: '#FFD700' } : {}}>
              {current.isProfile ? "Academic Achievement" : current.company}
            </MilestoneCompany>
            <MilestoneTitle>
              {current.isProfile ? academicRank.title : current.title}
            </MilestoneTitle>
          </Overlay>
        </ImageWrapper>
      </AnimatePresence>
    </Container>
  );
};

export default HeroMediaCarousel;
