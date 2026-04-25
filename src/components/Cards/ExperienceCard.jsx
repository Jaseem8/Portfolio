import React from 'react'
import styled, { useTheme, keyframes } from 'styled-components'
import { motion } from 'framer-motion'

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
    @media only screen and (max-width: 768px){
        font-size: 12px;
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
    gap: 12px;
    margin-top: 15px;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 10px 0;
`

const MarqueeTrack = styled(motion.div)`
    display: flex;
    gap: 12px;
    width: max-content;
`

const HighlightCard = styled.a`
    min-width: 180px;
    width: 180px;
    background: ${({ theme }) => theme.bg};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.text_primary + '15'};
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.02);
        border: 1px solid ${({ theme }) => theme.primary};
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    @media only screen and (max-width: 768px) {
        min-width: 140px;
        width: 140px;
    }
`

const HighlightImage = styled.img`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
`

const HighlightTitle = styled.div`
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

const LinkedInLink = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
`



const ExperienceCard = ({ experience }) => {
    const theme = useTheme();
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
            {experience?.highlights &&
                <>
                    <div style={{ fontSize: '13px', fontWeight: '600', marginTop: '8px', color: theme.text_secondary }}>Featured Highlights</div>
                    <HighlightsContainer>
                        <MarqueeTrack
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                            whileHover={{ animationPlayState: 'paused' }}
                        >
                            {/* Double the items for seamless loop */}
                            {[...experience.highlights, ...experience.highlights].map((highlight, index) => (
                                <HighlightCard key={index} href={highlight.link} target="_blank">
                                    <HighlightImage src={highlight.image} />
                                    <HighlightTitle>{highlight.title}</HighlightTitle>
                                    <LinkedInLink>View on LinkedIn</LinkedInLink>
                                </HighlightCard>
                            ))}
                        </MarqueeTrack>
                    </HighlightsContainer>
                </>
            }
            {experience?.skills &&
                <Skills>
                    <b>Skills:</b>
                    <ItemWrapper>
                        {experience?.skills?.map((skill, index) => (
                            <Skill key={index}>• {skill}</Skill>
                        ))}
                    </ItemWrapper>
                </Skills>
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