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
  ImpactContainer,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  Highlight,
} from "./HeroStyle";
import { FaBriefcase, FaUsers, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import HeroImg from "../../images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio, impactStats } from "../../data/constants";
import Counter from "./Counter";
import ZeroToOne from "./ZeroToOne";
import HeroMediaCarousel from "./HeroMediaCarousel";

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
              Senior Software Engineer (Tier 1 graduate) with 7 years of <ZeroToOne /> product development experience. Expert in architecting scalable microservices, integrating <Highlight>Generative AI</Highlight> & <Highlight>RAG</Highlight> systems into production (<Highlight>LangChain</Highlight>, <Highlight>LangGraph</Highlight>), and leading full-stack agile teams (<Highlight>React</Highlight>,<Highlight>Next.js</Highlight>, <Highlight>NestJS</Highlight>, <Highlight>AWS</Highlight>) to scale platforms for <Counter value="900k+" color="#B192EF" /> users.
            </SubTitle>

            <ImpactContainer>
              {impactStats.map((stat, index) => (
                <StatCard key={index}>
                  <StatIcon>
                    {stat.icon === 'briefcase' && <FaBriefcase />}
                    {stat.icon === 'users' && <FaUsers />}
                    {stat.icon === 'education' && <FaGraduationCap />}
                    {stat.icon === 'chart' && <FaChartLine />}
                  </StatIcon>
                  <StatValue>
                    <Counter value={stat.value} color="#B192EF" />
                  </StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </ImpactContainer>
            <ResumeButton href={Bio.resume} target="_blank" download="Jaseem_Sabith_Software_Engineer_7_YOE.pdf">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <HeroMediaCarousel />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
