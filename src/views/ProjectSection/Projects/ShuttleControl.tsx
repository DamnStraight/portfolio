import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectTemplate from "../../../types/ProjectTemplate";

const projectDetails: ProjectTemplate = {
  title: "ShuttleControl",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  detailedDescription: "",
  notableTasks: [
    "Completely refactored web and react-native codebase to Typescript",
    "Complete re-write of react-native codebase from class components to hooks",
  ],
  techStack: [
    "React",
    "ReactNative",
    "Redux",
    "JavaScript",
    "TypeScript",
    "AntDesign",
  ],
  images: [],
};

const ShuttleControl: React.FC = () => {
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

export default ShuttleControl;

// const CardImage = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "linus.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 1000, quality: 90) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Img
//       // className="overflow-hidden h-56"
//       className="rounded-lg h-24 w-24"
//       fluid={data.placeholderImage.childImageSharp.fluid}
//     />
//   );
// };
