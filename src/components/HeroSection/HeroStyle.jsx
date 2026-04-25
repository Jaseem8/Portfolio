import styled, { keyframes } from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 50px ${({ theme }) => theme.primary + '30'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 70px ${({ theme }) => theme.primary + '50'};
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 52px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 8px;
  
  span {
    background: linear-gradient(225deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primary + 'CC'} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 'AA'};
  max-width: 600px;
  padding: 16px 20px;
  background: ${({ theme }) => theme.primary + '10'};
  border-left: 4px solid ${({ theme }) => theme.primary};
  border-radius: 4px 12px 12px 4px;
  backdrop-filter: blur(8px);
  font-weight: 400;

  @media (max-width: 960px) {
    text-align: center;
    border-left: none;
    border-top: 4px solid ${({ theme }) => theme.primary};
    border-radius: 12px;
    padding: 20px;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    margin-bottom: 30px;
  }
`;

const shine = keyframes`
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border: none;
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        top: -50%;
        left: -100%;
        width: 50%;
        height: 200%;
        background: rgba(255, 255, 255, 0.2);
        transform: rotate(30deg);
        animation: ${shine} 4s infinite;
    }

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
        filter: brightness(1.1);
    }    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;

export const SkillSpan = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  padding: 2px 6px;
  background: ${({ theme }) => theme.primary + '15'};
  border-radius: 4px;
`;

