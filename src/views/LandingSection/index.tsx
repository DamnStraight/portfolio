import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./LandingSection.module.scss";
import Modal from "../../components/Modal";

const LandingSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "linus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      self: file(relativePath: { eq: "linus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  useEffect(() => {
    const element = document.querySelector("#name");
    element?.classList.add(styles.fadeinState);
  }, []);

  return (
    <section className="h-full sm:h-screen">
      {/* <Modal /> */}
      <div
        className={`h-full pt-12 pb-12 ${styles.bgGradient} flex flex-col items-center justify-center`}
      >
        <div className="container mx-auto font-roboto text-white text-center md:text-left">
          <div className="flex flex-col items-center">
            <div className="w-3/4 mb-16">
              <p className="text-5xl leading-tight mb-0 text-shadow-lg text-center lg:text-left">
                Hello, I'm
              </p>
              <p
                id="name"
                className={`font-bold text-6xl md:text-7xl lg:text-9xl leading-tight mb-0 ${styles.defaultState} text-shadow-lg text-center`}
              >{`Steven Labelle`}</p>
              <p className="text-4xl leading-normal mb-0 text-shadow-lg text-center lg:text-right">
                a Software Engineer & Full Stack Developer
              </p>
            </div>
{/* 
            <div className="w-full xl:w-1/3 max-w-sm w-full lg:max-w-full lg:flex pl-6">
              <BackgroundImage
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                fluid={data.self.childImageSharp.fluid}
              />
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="w-3/4 sm:w-2/3 md:w-3/4 lg:w-1/3">
              <div className="w-full min-h-full bg-white rounded-lg shadow-xl p-6">
                <Img className="w-24 h-24 mx-auto rounded-full mb-6" fluid={data.placeholderImage.childImageSharp.fluid}  />
                <p></p>
                <div className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;

{
  /* <div class="bg-white rounded-lg p-6">
2    <img class="h-16 w-16 rounded-full mx-auto" src="avatar.jpg">
3    <div>
4      <h2 class="text-lg">Erin Lindford</h2>
5      <div class="text-purple-500">Customer Support</div>
6      <div class="text>erinlindford@example.com</div>
7      <div class="text>(555) 765-4321</div>
8    </div>
9  </div> */
}
