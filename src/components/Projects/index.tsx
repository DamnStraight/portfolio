import React from "react";

import ProjectCard from "../ProjectCard";

const Projects: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row mb-4">
          <div class="w-full md:w-1/3 px-6 md:px-2">
            <ProjectCard />
          </div>
          <div class="w-full md:w-1/3 px-6 md:px-2">
            <ProjectCard />
          </div>
          <div class="w-full md:w-1/3 px-6 md:px-2">
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
