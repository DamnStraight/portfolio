import React from "react";

import ProjectCard from "../../components/ProjectCard";
import FadeIn from "../../components/FadeIn";

import styled from "styled-components";
import tw from "tailwind.macro";
import ShuttleControl from "./Projects/ShuttleControl";
import WebPortfolio from "./Projects/WebPortfolio";

const CardWrapper = styled.div`
  ${tw`mb-8 px-6 md:px-4 w-full lg:w-1/2`}
`;

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16">
        <div className="flex flex-col md:flex-row flex-wrap mb-10">
          <CardWrapper>
            <FadeIn>
              <WebPortfolio />
            </FadeIn>
          </CardWrapper>
          <CardWrapper>
            <FadeIn delay={150}>
              <ShuttleControl />
            </FadeIn>
          </CardWrapper>
          <CardWrapper>
            <FadeIn>
              <WebPortfolio />
            </FadeIn>
          </CardWrapper>
          <CardWrapper>
            <FadeIn delay={150}>
              <ShuttleControl />
            </FadeIn>
          </CardWrapper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
