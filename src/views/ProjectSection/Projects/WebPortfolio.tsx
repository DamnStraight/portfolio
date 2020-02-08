import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectTemplate from "../../../types/ProjectTemplate";

const projectDetails: ProjectTemplate = {
  title: "Web Portfolio",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
