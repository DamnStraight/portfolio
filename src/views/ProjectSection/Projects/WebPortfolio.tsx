import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectTemplate from "../../../types/ProjectTemplate";

const projectDetails: ProjectTemplate = {
  title: "Web Portfolio",
  description: "The website you're currently looking at! My own personal web portfolio to display projects and work experience.",
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
};

const WebPortfolio: React.FC = () => {
  const { title, description, notableTasks, techStack } = projectDetails;
  return (
    <ProjectCard
      title={title}
      description={description}
      stack={techStack}
      notableTasks={notableTasks}
    />
  );
};

export default WebPortfolio;
