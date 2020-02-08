import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import TechPill, { TechStack } from "../TechPill";

// <CardDiv /> =================================================== //
const CardDiv = styled.div`
  ${tw`max-w-full flex bg-white overflow-hidden rounded-lg shadow-xl`}
  transition: transform 0.1s linear;
  &:hover {
    transform: scale(1.05);
  }
  min-height: 500px;
`;

// <UnderlineTitle /> =================================================== //
type UnderlineTitleProps = {
  subtitle: boolean;
};

const UnderlineTitle = styled.div<UnderlineTitleProps>`
  ${tw`font-bold mb-4 text-gray-800 uppercase`}
  ${props =>
    props.subtitle
      ? tw`text-sm`
      : tw`text-2xl`}
  border-bottom: 1px solid #E2E8F0;
`;

// <ProjectCard /> =================================================== //

type Props = {
  title: string;
  description: string;
  images?: string[];
  stack: TechStack[];
  notableTasks?: string[];
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  images,
  stack,
  notableTasks = [],
}) => {
  const isNotableTasksEmpty = notableTasks.length == 0;

  return (
    <CardDiv>
      {/* <div> */}
      <div className="px-6 py-4 flex flex-col flex-grow">
        <UnderlineTitle subtitle={false}>{title}</UnderlineTitle>
        <p
          className={`${
            isNotableTasksEmpty ? "flex-grow" : ""
          } mt-2 text-base mb-4 text-gray-700`}
        >
          {description}
        </p>

        {/* <div className="flex flex-wrap">
            <div className="px-2 mb-4">
              <CardImage />
            </div>
            <div className="px-2 mb-4">
              <CardImage />
            </div>
            <div className="px-2 mb-4">
              <CardImage />
            </div>
            <div className="px-2 mb-4">
              <CardImage />
            </div>
          </div> */}

        {notableTasks.length != 0 && (
          <div className={`${isNotableTasksEmpty ? "" : "flex-grow"}`}>
            <UnderlineTitle subtitle>Notable Tasks</UnderlineTitle>
            <div className="mb-4">
              <ul className="list-inside text-sm">
                {notableTasks.map(entry => (
                  <li>{entry}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="flex flex-col justify-end">
          <UnderlineTitle subtitle>Tech Stack</UnderlineTitle>
          <span className="flex-none">
            {stack.map(entry => (
              <TechPill icon={entry} />
            ))}
          </span>
        </div>
      </div>
      {/* </div> */}
    </CardDiv>
  );
};

export default ProjectCard;