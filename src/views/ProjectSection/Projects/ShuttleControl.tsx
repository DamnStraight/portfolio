import React from "react";
import ProjectCard from "../../../components/ProjectCard";
import ProjectTemplate from "../../../types/ProjectTemplate";

const projectDetails: ProjectTemplate = {
  title: "ShuttleControl",
  description: "Full-Stack and React Native developer at ShuttleControl.",
  detailedDescription: "",
  notableTasks: [
    "Completely refactored web and react-native application to typescript",
    "Refactored react-native application from class components to hooks",
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
