import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectTemplate from "../../../types/ProjectTemplate";

const projectDetails: ProjectTemplate = {
  title: "Web Portfolio",
  description: "Personal web portfolio to showcase past work experience and generally anything I've worked on in my free time!",
  detailedDescription: "",
  notableTasks: [],
  techStack: [
    "React",
    "Gatsby",
    "StyledComponents",
    "JavaScript",
    "TypeScript",
    "Tailwindcss"
  ],
  images: [],
  repoUrl: "https://github.com/DamnStraight/portfolio"
};

const WebPortfolio: React.FC = () => {
  return (
    <ProjectCard project={projectDetails} />
  );
};

export default WebPortfolio;
