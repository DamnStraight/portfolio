import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectTemplate from "../../../types/ProjectTemplate";

const projectDetails: ProjectTemplate = {
  title: "ShuttleControl",
  description: "A shuttle management application designed for car dealerships. Consists of a web dashboard application for service staff and a react-native application for shuttle drivers. These applications are not public facing sadly, however I've included a few screenshots.",
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
  repoUrl: ""
};

const ShuttleControl: React.FC = () => {
  const { title, description, notableTasks, techStack } = projectDetails;
  return (
    <ProjectCard project={projectDetails} />
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
