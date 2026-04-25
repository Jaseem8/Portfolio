import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SkillSpan,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> <span>{Bio.name}</span>
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning and a dedicated work ethic, I am committed to delivering high-quality results. With a strong foundation in <SkillSpan style={{ color: '#61DBFB', background: '#61DBFB15' }}>React</SkillSpan>, <SkillSpan style={{ color: '#68A063', background: '#68A06315' }}>Node.js</SkillSpan>, and <SkillSpan style={{ color: '#F59E0B', background: '#F59E0B15' }}>Generative AI</SkillSpan>, I am seeking a position to leverage my expertise and contribute to an innovative team.
            </SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
