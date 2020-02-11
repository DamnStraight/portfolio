import React, { useState } from "react";
import FadeIn from "../../components/FadeIn";
import Modal from "../../components/Modal";

import styled from "styled-components";
import tw from "tailwind.macro";
import ShuttleControl from "./Projects/ShuttleControl";
import WebPortfolio from "./Projects/WebPortfolio";

const CardWrapper = styled.div`
  ${tw`w-full`}
`;

const ProjectTitle = styled.div`
  ${tw`
    w-full
    absolute 
    text-7xl md:text-9xl lg:text-xxl xl:text-xxxl 
    font-bold text-gray-500 text-shadow leading-none text-center uppercase 
    opacity-25 
  `}
`;

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section id="projects" className="bg-gray-100">
      {/* <Modal show={showModal} onClose={() => setShowModal(false)} title="Test"/> */}
      <ProjectTitle>Projects...</ProjectTitle>
      <div className="container mx-auto pt-8 md:pt-16 lg:pt-22 xl:pt-32 pb-16">
        {/* <div style={{ borderBottom: '1px solid #a0aec0'}} className="text-7xl text-gray-700 text-shadow mb-12 uppercase">Projects</div> */}
        {/* <div className="flex flex-col md:flex-row flex-wrap mb-10"> */}
        <div
          style={{ gridAutoRows: "1fr" }}
          className="grid gap-8 grid-cols-1 xl:grid-cols-2 my-10"
        >
          <CardWrapper onClick={() => setShowModal(true)}>
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
