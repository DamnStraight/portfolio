import React from "react";

import ProjectCard from "../../components/ProjectCard";
import FadeIn from "../../components/FadeIn";

const Projects: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn>
              <ProjectCard />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn delay={150}>
              <ProjectCard />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn delay={300}>
              <ProjectCard />
            </FadeIn>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn>
              <ProjectCard />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn delay={150}>
              <ProjectCard />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn delay={300}>
              <ProjectCard />
            </FadeIn>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-10">
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn>
              <ProjectCard />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn delay={150}>
              <ProjectCard />
            </FadeIn>
          </div>
          <div className="w-full md:w-1/3 px-6 md:px-4">
            <FadeIn delay={300}>
              <ProjectCard />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
