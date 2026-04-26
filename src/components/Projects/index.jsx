import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  ActivePill,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import { FiGrid, FiGlobe, FiCpu, FiSmartphone, FiBox } from "react-icons/fi";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: <FiGrid /> },
    { id: "web app", name: "Web", icon: <FiGlobe /> },
    { id: "AI", name: "AI", icon: <FiCpu /> },
    { id: "android app", name: "Mobile", icon: <FiSmartphone /> },
    { id: "Other", name: "Other", icon: <FiBox /> },
  ];

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Showcasing specialized solutions in AI, Full-Stack Web, and Mobile development.
        </Desc>
        
        <ToggleButtonGroup>
          {categories.map((cat) => (
            <ToggleButton
              key={cat.id}
              active={toggle === cat.id}
              onClick={() => setToggle(cat.id)}
            >
              {cat.icon}
              {cat.name}
              {toggle === cat.id && (
                <ActivePill
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          <AnimatePresence mode="popLayout">
            {projects
              .filter((item) => toggle === "all" || item.category === toggle)
              .map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
