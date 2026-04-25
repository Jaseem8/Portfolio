import React from 'react';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, 
  SiVite, SiHtml5, SiCss3, SiJavascript,
  SiNodedotjs, SiExpress, SiAmazonaws, 
  SiRedis, SiDocker, SiNginx, SiMongodb, SiPostgresql, 
  SiMysql, SiFirebase, SiGit, SiPostman, SiJira,
  SiMaterialdesign, SiPython
} from 'react-icons/si';
import { 
  FaBrain, FaUsers, FaInfinity, FaCode, FaCogs, 
  FaDatabase, FaNetworkWired, FaServer, FaRobot,
  FaMicrochip
} from 'react-icons/fa';
import { DiDatabase, DiTerminal } from 'react-icons/di';
import { BiNetworkChart } from 'react-icons/bi';
import { HiLightningBolt, HiOutlineDatabase, HiOutlineLink } from 'react-icons/hi';

const iconMap = {
  // AI & GenAI
  rag: <HiOutlineDatabase />,
  langchain: <HiOutlineLink />,
  langgraph: <BiNetworkChart />,
  llms: <FaBrain />, 
  pinecone: <FaMicrochip />,
  vectordbs: <DiDatabase />,
  nlp: <FaRobot />,
  multiagentsystems: <FaUsers />,

  // Frontend
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  typescript: <SiTypescript />,
  redux: <SiRedux />,
  reduxtoolkit: <SiRedux />,
  tailwind: <SiTailwindcss />,
  tailwindcss: <SiTailwindcss />,
  materialui: <SiMaterialdesign />,
  vite: <SiVite />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,

  // Backend & Cloud
  nestjs: <FaServer />, 
  nodejs: <SiNodedotjs />,
  express: <DiTerminal />,
  microservices: <FaNetworkWired />,
  kafka: <HiLightningBolt />, 
  aws: <SiAmazonaws />,
  redis: <SiRedis />,
  docker: <SiDocker />,
  nginx: <SiNginx />,
  bullmq: <FaCogs />,

  // Databases
  mongodb: <SiMongodb />,
  postgresql: <SiPostgresql />,
  dynamodb: <DiDatabase />,
  mysql: <SiMysql />,
  cassandra: <FaDatabase />,
  apachecassandra: <FaDatabase />,
  firebase: <SiFirebase />,
  sqlite3: <DiDatabase />,

  // Tools
  git: <SiGit />,
  postman: <SiPostman />,
  jira: <SiJira />,
  newrelic: <HiLightningBolt />,
  cicd: <FaInfinity />,
  python: <SiPython />,
};

const SkillIcon = ({ name, size = 24, color = 'currentColor' }) => {
  if (!name) return <FaCode style={{ color, fontSize: size }} />;
  
  let key = name.toLowerCase()
    .replace(/\s+/g, '')      // Remove spaces
    .replace(/\.js$/, '')     // Remove .js
    .replace(/js$/, '')       // Remove js suffix
    .replace(/\d+$/, '')      // Remove version numbers (React 18 -> React)
    .replace(/\(.*\)$/, '')   // Remove text in parentheses
    .split('-')[0]            // Take first part of hyphenated names
    .replace(/inmemory$/, '') // Remove specific suffixes
    .replace(/dax$/, '');

  // Specific overrides for tricky names
  if (name.toLowerCase().includes('react')) key = 'react';
  if (name.toLowerCase().includes('next')) key = 'nextjs';
  if (name.toLowerCase().includes('node')) key = 'nodejs';
  if (name.toLowerCase().includes('tailwind')) key = 'tailwind';
  if (name.toLowerCase().includes('material')) key = 'materialui';
  if (name.toLowerCase().includes('redux')) key = 'redux';
  if (name.toLowerCase().includes('redis')) key = 'redis';
  if (name.toLowerCase().includes('cassandra')) key = 'cassandra';
  if (name.toLowerCase().includes('multi-agent')) key = 'multiagentsystems';
  if (name.toLowerCase().includes('cicd')) key = 'cicd';

  const icon = iconMap[key] || <FaCode />;

  return (
    <div style={{ 
      color, 
      fontSize: size, 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size
    }}>
      {icon}
    </div>
  );
};

export default SkillIcon;
