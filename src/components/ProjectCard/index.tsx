import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import styles from "./ProjectCard.module.scss";

const CardImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "linus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      className="overflow-hidden"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

type Props = {
  title: String;
  description: String;
};

const ProjectCard: React.FC = props => {
  console.log(props);
  return (
    <div
      className={`${styles.card} max-w-full bg-white overflow-hidden rounded-lg shadow-xl`}
    >
      <CardImage />
      <div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Project title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
