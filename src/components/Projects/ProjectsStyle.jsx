import styled from 'styled-components';
import { motion } from 'framer-motion';
import _default from '../../themes/default';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 10px 10px 40px 10px;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    background: ${({ theme }) => theme.card_light + "80"};
    backdrop-filter: blur(8px);
    border: 1px solid ${({ theme }) => theme.text_primary + "10"};
    padding: 6px;
    border-radius: 16px;
    font-weight: 500;
    margin: 22px 0px;
    position: relative;
    gap: 4px;
    @media (max-width: 768px) {
        font-size: 12px;
        padding: 4px;
        border-radius: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 12px 28px;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
    font-size: 16px;
    font-weight: 600;
    color: ${({ active, theme }) => active ? theme.white : theme.text_secondary};
    transition: all 0.3s ease;
    
    &:hover {
        color: ${({ theme }) => theme.white};
    }

    @media (max-width: 768px) {
        padding: 8px 14px;
        font-size: 13px;
        gap: 6px;
    }
`

export const ActivePill = styled(motion.div)`
    position: absolute;
    height: calc(100% - 12px);
    background: ${({ theme }) => theme.primary};
    border-radius: 12px;
    z-index: 1;
    box-shadow: 0 4px 20px ${({ theme }) => theme.primary + "40"};

    @media (max-width: 768px) {
        height: calc(100% - 8px);
        border-radius: 10px;
    }
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;
