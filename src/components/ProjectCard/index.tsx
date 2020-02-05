import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import styles from "./ProjectCard.module.scss";

type Props = {};

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

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const ProjectCard: React.FC = props => {
  console.log(props);
  return (
    <div className={`${styles.card} max-w-full bg-white overflow-hidden rounded-lg shadow-xl`}>
      <CardImage className="overflow-hidden" />
      <div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Project title</div>
        <p className="text-gray-700 text-base">Description here</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
