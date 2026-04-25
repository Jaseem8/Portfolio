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

const iconData = {
  // AI & GenAI
  rag: { icon: <HiOutlineDatabase />, color: '#00A3E0' },
  langchain: { icon: <HiOutlineLink />, color: '#1389FD' },
  langgraph: { icon: <BiNetworkChart />, color: '#FF6B6B' },
  llms: { icon: <FaBrain />, color: '#FFD700' }, 
  pinecone: { icon: <FaMicrochip />, color: '#243447' },
  vectordbs: { icon: <DiDatabase />, color: '#4CAF50' },
  nlp: { icon: <FaRobot />, color: '#9C27B0' },
  multiagentsystems: { icon: <FaUsers />, color: '#00BCD4' },

  // Frontend
  react: { icon: <SiReact />, color: '#61DAFB' },
  nextjs: { icon: <SiNextdotjs />, color: '#ffffff' },
  typescript: { icon: <SiTypescript />, color: '#3178C6' },
  redux: { icon: <SiRedux />, color: '#764ABC' },
  reduxtoolkit: { icon: <SiRedux />, color: '#764ABC' },
  tailwind: { icon: <SiTailwindcss />, color: '#06B6D4' },
  tailwindcss: { icon: <SiTailwindcss />, color: '#06B6D4' },
  materialui: { icon: <SiMaterialdesign />, color: '#007FFF' },
  vite: { icon: <SiVite />, color: '#646CFF' },
  html: { icon: <SiHtml5 />, color: '#E34F26' },
  css: { icon: <SiCss3 />, color: '#1572B6' },
  javascript: { icon: <SiJavascript />, color: '#F7DF1E' },

  // Backend & Cloud
  nestjs: { icon: <FaServer />, color: '#E0234E' }, 
  nodejs: { icon: <SiNodedotjs />, color: '#339933' },
  express: { icon: <DiTerminal />, color: '#ffffff' },
  microservices: { icon: <FaNetworkWired />, color: '#0078D4' },
  kafka: { icon: <HiLightningBolt />, color: '#ffffff' }, 
  aws: { icon: <SiAmazonaws />, color: '#FF9900' },
  redis: { icon: <SiRedis />, color: '#DC382D' },
  docker: { icon: <SiDocker />, color: '#2496ED' },
  nginx: { icon: <SiNginx />, color: '#009639' },
  bullmq: { icon: <FaCogs />, color: '#FF4500' },

  // Databases
  mongodb: { icon: <SiMongodb />, color: '#47A248' },
  postgresql: { icon: <SiPostgresql />, color: '#4169E1' },
  dynamodb: { icon: <DiDatabase />, color: '#4053D6' },
  mysql: { icon: <SiMysql />, color: '#4479A1' },
  cassandra: { icon: <FaDatabase />, color: '#1287B1' },
  apachecassandra: { icon: <FaDatabase />, color: '#1287B1' },
  firebase: { icon: <SiFirebase />, color: '#FFCA28' },
  sqlite3: { icon: <DiDatabase />, color: '#003B57' },

  // Tools
  git: { icon: <SiGit />, color: '#F05032' },
  postman: { icon: <SiPostman />, color: '#FF6C37' },
  jira: { icon: <SiJira />, color: '#0052CC' },
  newrelic: { icon: <HiLightningBolt />, color: '#1CE783' },
  cicd: { icon: <FaInfinity />, color: '#0078D4' },
  python: { icon: <SiPython />, color: '#3776AB' },
};

const SkillIcon = ({ name, size = 24, color: customColor }) => {
  if (!name) return <FaCode style={{ color: customColor || '#888', fontSize: size }} />;
  
  let key = name.toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\.js$/, '')
    .replace(/js$/, '')
    .replace(/\d+$/, '')
    .replace(/\(.*\)$/, '')
    .split('-')[0]
    .replace(/inmemory$/, '')
    .replace(/dax$/, '');

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

  const data = iconData[key] || { icon: <FaCode />, color: '#888' };
  const finalColor = customColor || data.color;

  return (
    <div style={{ 
      color: finalColor, 
      fontSize: size, 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      filter: `drop-shadow(0 0 2px ${finalColor}40)` // Subtle glow
    }}>
      {data.icon}
    </div>
  );
};

export default SkillIcon;
