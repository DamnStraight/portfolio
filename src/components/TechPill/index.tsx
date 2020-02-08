import React from "react";

import styled from "styled-components";
import tw from "tailwind.macro";

import ReactIcon from "./../../assets/react.inline.svg";
import AntDesignIcon from "./../../assets/antdesign.inline.svg";
import GitIcon from "./../../assets/git.inline.svg";
import JavaIcon from "./../../assets/java.inline.svg";
import JavaScriptIcon from "./../../assets/javascript.inline.svg";
import KotlinIcon from "./../../assets/kotlin.inline.svg";
import NodejsIcon from "./../../assets/nodejs.inline.svg";
import PostgresIcon from "./../../assets/postgres.inline.svg";
import ReduxIcon from "./../../assets/redux.inline.svg";
import SassIcon from "./../../assets/sass.inline.svg";
import SpringIcon from "./../../assets/spring.inline.svg";
import TypeScriptIcon from "./../../assets/typescript.inline.svg";
import StyledComponentsIcon from "./../../assets/styledcomponents.inline.svg";
import GatsbyIcon from "./../../assets/gatsby.inline.svg";
import TailwindcssIcon from "./../../assets/tailwindcss.inline.svg";

const PillDiv = styled.div`
  ${tw`inline-flex items-center rounded-full text-sm px-3 bg-gray-200 h-8 min-w-0 mb-2 mr-2`}
  vertical-align: top;
`;

type Props = {
  icon: TechStack;
  children?: React.ReactNode;
};

const TechPill: React.FC<Props> = ({ icon }) => {
  const [title, element] = getStack(icon);
  return (
    <PillDiv>
      <div style={{ height: "20px", width: "20px", marginRight: "6px" }}>
        {element}
      </div>
      <span>{title}</span>
    </PillDiv>
  );
};

export default TechPill;

export type TechStack =
  | "React"
  | "ReactNative"
  | "Git"
  | "JavaScript"
  | "Java"
  | "Kotlin"
  | "Nodejs"
  | "Postgres"
  | "Redux"
  | "Sass"
  | "Spring"
  | "AntDesign"
  | "TypeScript"
  | "StyledComponents"
  | "Gatsby"
  | "Tailwindcss";

const getStack = (stack: TechStack): [String, React.ReactNode] => {
  switch (stack) {
    case "React":
      return ["React", <ReactIcon className="inline-block" />];
    case "ReactNative":
      return ["React Native", <ReactIcon className="inline-block" />];
    case "Git":
      return ["Git", <GitIcon />];
    case "JavaScript":
      return ["JavaScript", <JavaScriptIcon />];
    case "Java":
      return ["Java", <JavaIcon />];
    case "Kotlin":
      return ["Kotlin", <KotlinIcon />];
    case "Nodejs":
      return ["NodeJS", <NodejsIcon />];
    case "Postgres":
      return ["PostgreSQL", <PostgresIcon />];
    case "Redux":
      return ["React Redux", <ReduxIcon />];
    case "Sass":
      return ["Sass", <SassIcon />];
    case "Spring":
      return ["Spring Framework", <SpringIcon />];
    case "TypeScript":
      return ["TypeScript", <TypeScriptIcon />];
    case "AntDesign":
      return ["Ant Design", <AntDesignIcon />];
    case "StyledComponents":
      return ["styled-components", <StyledComponentsIcon />];
    case "Gatsby":
      return ["Gatsby", <GatsbyIcon />];
    case "Tailwindcss":
      return ["tailwindcss", <TailwindcssIcon />];
    default:
      return ["", null];
  }
};
