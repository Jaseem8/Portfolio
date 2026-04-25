import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink, AvailabilityBadge, PulseDot, ResumeButton, MobileResumeIcon, MobileCallIcon } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaDownload, FaPhoneAlt } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
          <AvailabilityBadge>
            <PulseDot />
            Available for Hire
          </AvailabilityBadge>
        </NavLogo>
        <MobileIcon>
          <MobileResumeIcon href={Bio.resume} target="_blank">
            <FaDownload size="20px" />
          </MobileResumeIcon>
          <MobileCallIcon href={`tel:${Bio.phone}`}>
            <FaPhoneAlt size="18px" />
          </MobileCallIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <div style={{ marginRight: '20px', cursor: 'pointer', color: theme.text_primary, display: 'flex', alignItems: 'center' }} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <BsSunFill size="24px" /> : <BsMoonFill size="24px" />}
          </div>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <ResumeButton href={Bio.resume} target="_blank">Resume</ResumeButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar