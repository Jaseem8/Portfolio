import React, { useState, useEffect } from 'react'
import styled, { useTheme, keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import SkillIcon from '../Icons/SkillIcons'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 100%;
    max-width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.card};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid ${({ theme }) => theme.text_primary + '20'};
    
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
        border: 1px solid ${({ theme }) => theme.primary};
        filter: brightness(1.1);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        max-width: 100%;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`

const Image = styled.img`
    height: 40px;
    width: 40px;
    background-color: #000;
    border-radius: 8px;
    object-fit: cover;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 32px;
        width: 32px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    display: flex;
    align-items: center;
    gap: 6px;
    background: ${({ theme }) => theme.text_primary + '10'};
    padding: 4px 10px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.text_primary + '20'};
    @media only screen and (max-width: 768px){
        font-size: 12px;
        padding: 2px 8px;
    }
`

const Achievements = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
`

const Achievement = styled.div`
    display: flex;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const AchievementIcon = styled.span`
    font-size: 16px;
`

const AchievementText = styled.span`
    flex: 1;
`

const HighlightsContainer = styled.div`
    display: flex;
    margin-top: 15px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 12px;
`

const CarouselTrack = styled(motion.div)`
    display: flex;
    width: 100%;
`

const HighlightCard = styled.a`
    min-width: 100%;
    width: 100%;
    height: 300px;
    background: ${({ theme }) => theme.bg};
    position: relative;
    text-decoration: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 768px) {
        height: 220px;
    }
`

const ContentOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px 15px 15px 15px;
    background: linear-gradient(transparent, rgba(0,0,0,0.9));
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const NavButton = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    color: white;
    transition: all 0.2s ease;
    &:hover {
        background: rgba(255, 255, 255, 0.4);
    }
    ${({ left }) => left ? 'left: 10px;' : 'right: 10px;'}
`

const HighlightImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const HighlightTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: white;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const LinkedInLink = styled.div`
    font-size: 11px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
`



const ExperienceCard = ({ experience }) => {
    const theme = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!experience?.highlights) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % experience.highlights.length);
        }, 1500); // 1.5 seconds auto-scroll
        return () => clearInterval(interval);
    }, [experience?.highlights]);

    const handlePrev = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + experience.highlights.length) % experience.highlights.length);
    };

    const handleNext = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % experience.highlights.length);
    };

    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>
                }
            </Description>
            {experience?.achievements &&
                <Achievements>
                    {experience?.achievements?.map((achievement, index) => (
                        <Achievement key={index}>
                            <AchievementIcon>{achievement.icon}</AchievementIcon>
                            <AchievementText>{achievement.text}</AchievementText>
                        </Achievement>
                    ))}
                </Achievements>
            }
            {experience?.skills &&
                <Skills>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: theme.text_secondary }}>Skills:</div>
                    <ItemWrapper>
                        {experience?.skills?.map((skill, index) => (
                            <Skill key={index}>
                                <SkillIcon name={skill} size={14} />
                                {skill}
                            </Skill>
                        ))}
                    </ItemWrapper>
                </Skills>
            }
            {experience?.highlights &&
                <>
                    <div style={{ fontSize: '13px', fontWeight: '600', marginTop: '8px', color: theme.text_secondary }}>Featured Highlights</div>
                    <HighlightsContainer>
                        <NavButton left onClick={handlePrev}>{"<"}</NavButton>
                        <NavButton onClick={handleNext}>{">"}</NavButton>
                        <CarouselTrack
                            animate={{ x: `-${currentIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {experience.highlights.map((highlight, index) => (
                                <HighlightCard key={index} href={highlight.link} target="_blank">
                                    <HighlightImage src={highlight.image} />
                                    <ContentOverlay>
                                        <HighlightTitle>{highlight.title}</HighlightTitle>
                                        <LinkedInLink>View on LinkedIn</LinkedInLink>
                                    </ContentOverlay>
                                </HighlightCard>
                            ))}
                        </CarouselTrack>
                    </HighlightsContainer>
                </>
            }
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard